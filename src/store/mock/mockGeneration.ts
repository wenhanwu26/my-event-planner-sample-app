// /**
//  * This file generates mock senior data to use for testing
//  * The data can then be imported elsewhere to test components that rely on
//  * real data without needing a connection to a database.
//  */

import {v4 as uuidv4} from 'uuid';
import {subYears} from 'date-fns';

import {useDataStore} from '@/store/data';
import {listSeniors} from '@/graphql/queries';
import {deleteSenior, createSenior} from '@/graphql/mutations';
import {generateClient} from 'aws-amplify/api';
import Senior from "@/models/Senior";
import File from "@/models/File";
// // Create GraphQL API client
const apiClient = generateClient();

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateId() {
  return Math.random().toString(36).substr(2, 9); // Generates a random string
}

function generateMockData(): Senior {
  const firstNames = ["John", "Jane", "Michael", "Mary", "Robert", "Patricia"];
  const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia"];
  const genders = ["Male", "Female", "Other"];
  const services = ["Healthcare", "Meal Delivery", "Physical Therapy", "Housekeeping", "Housing Navigation"];
  const photos = ["e1.png", "e2.png", "e3.png", "e4.png", "e5.png", "e6.png", "e7.png", "e8.png", "e9.png", "e10.png"]

  const firstName = firstNames[randomInt(0, firstNames.length - 1)];
  const lastName = lastNames[randomInt(0, lastNames.length - 1)];
  const gender = genders[randomInt(0, genders.length - 1)];
  const dob = subYears(new Date(), 70 + randomInt(0, 15)); // Age between 70 and 85
  const id = uuidv4();
  const photo = photos[randomInt(0, photos.length - 1)];
  const address = `${randomInt(100, 999)} Main St, Anytown, USA`;
  const phoneNumber = `${randomInt(100, 999)}-555-${randomInt(1000, 9999)}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
  const servicesReceived = Array.from({length: randomInt(1, services.length)}, () => services[randomInt(0, services.length - 1)]);
  const files = [new File(
    generateId(),               // Generates a random ID
    `Mock File ${generateId()}`, // File name
    `https://example.com/file${generateId()}.pdf`, // Mock URL
    "des",
    ['tag1', 'tag2']            // Example tags
  )];

  return {
    id,
    firstName,
    lastName,
    dob,
    gender,
    photo,
    address,
    phoneNumber,
    email,
    servicesReceived,
    files,
  };
}

export function generateSeniors(num: number): Senior[] {
  let seniors: Senior[] = [];
  for (let i = 0; i < num; i++) {
    seniors.push(generateMockData());
  }
  return seniors;
}

export async function upLoadMockData() {
  const data = useDataStore();
  const allSeniors = data.seniors;

  try {
    // Get all Senior
    const res = await apiClient.graphql({query: listSeniors});
    // Delete each senior
    const deleteSeniorPromises = res.data.listSeniors.items.map(senior => {
      return apiClient.graphql({
          query: deleteSenior,
          variables: {input: {id: senior.id}}
        }
      );
    });
    // Wait for all deletions
    await Promise.all(deleteSeniorPromises);
    console.log('All existing seniors deleted successfully');
  } catch (error) {
    console.log('Error deleting seniors', error);
  }

  const createSeniorsPromises = allSeniors.map(async senior => {
    // create a new room
    //console.log(senior.files[0]);
    return apiClient.graphql({
      query: createSenior,
      variables: {
        input: {
          id: senior.id,
          firstName: senior.firstName,
          lastName: senior.lastName,
          dob: senior.dob?.toISOString().slice(0, 10),
          gender: senior.gender,
          photo: senior.photo,
          address: senior.address,
          phoneNumber: senior.phoneNumber,
          email: senior.email,
          servicesReceived: senior.servicesReceived,
          files: senior.files,
        }
      }
    })
  });
  try {
    // Wait for all additions
    await Promise.all(createSeniorsPromises);
    console.log('All seniors added successfully');
  } catch (error) {
    console.log('Error adding seniors', error);
  }
}

