import { defineStore } from 'pinia';

// For creating testing/mock data
import {generateSeniors, upLoadMockData} from './mock/mockGeneration';

// Add Amplify GraphQL Imports
import { listSeniors, listMedicalRecords } from '@/graphql/queries'
import { deleteSenior, deleteMedicalRecord, createSenior, createMedicalRecord, updateSenior } from '@/graphql/mutations';
import { generateClient } from 'aws-amplify/api';
import Senior from "@/models/Senior";
import MedicalRecord from "@/models/MedicalRecord";

// Create GraphQL API client
const apiClient = generateClient();


export const useDataStore = defineStore('data', {
  state: () => {
    return {
      seniors: [] as Senior[],
      medicalRecords: [] as MedicalRecord[],
    };
  },
  actions: {
    async initMockData() {
      //console.log("Generating Mock Data");
      this.seniors = generateSeniors(10);
    },

    async fetchData() {
      const dbSeniors = await apiClient.graphql({ query: listSeniors });
      this.seniors = dbSeniors.data.listSeniors.items.map(senior => {
        //console.log("fetching "+senior.id);
        return new Senior(senior.id,senior.firstName,senior.lastName, senior.dob,senior.gender,senior.photo, senior.address, senior.phoneNumber, senior.email, senior.servicesReceived);
      });

    },

    async upLoadData() {
      upLoadMockData();
    },

    async updateSenior(senior) {
      try {
        const response = await apiClient.graphql({
          query: updateSenior,  // Ensure this is your update GraphQL mutation
          variables: {
            input: {
              id: senior.id,
              firstName: senior.firstName,
              lastName: senior.lastName,
              dob: senior.dob,
              gender: senior.gender,
              photo: senior.photo,
              address: senior.address,
              phoneNumber: senior.phoneNumber,
              email: senior.email,
              servicesReceived: senior.servicesReceived,
              files: senior.files,
            }
          }
        });
        console.log('Senior updated successfully', response);
      } catch (error) {
        console.log('Error updating senior', error);
      }
    }
  }
});
