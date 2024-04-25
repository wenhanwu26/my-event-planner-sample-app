import MedicalRecord from "@/models/MedicalRecord";
import File from "@/models/File";

export default class Senior {
  id: string;
  firstName: string;
  lastName: string;
  dob?: Date;  // This should be handled as a string or Date depending on your date utility functions
  gender?: string;
  photo?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  medicalRecords?: MedicalRecord[];  // Array of MedicalRecord objects
  primaryDoctor?: string;
  medicalConditions?: string;
  medications?: string[];
  allergies?: string[];
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  emergencyContactRelation?: string;
  livingSituation?: string;
  activitiesInterest?: string[];
  dietaryPreferences?: string;
  mobility?: string;
  servicesReceived?: string[];
  serviceProvider?: string;
  powerOfAttorney?: string;
  insuranceDetails?: string;
  income?: number;
  notes?: string;
  files?: File[];  // Array of File objects

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    dob?: Date,
    gender?: string,
    photo?: string,
    address?: string,
    phoneNumber?: string,
    email?: string,
    servicesReceived?: string[],
    medicalRecords?: MedicalRecord[],
    primaryDoctor?: string,
    medicalConditions?: string,
    medications?: string[],
    allergies?: string[],
    emergencyContactName?: string,
    emergencyContactPhone?: string,
    emergencyContactRelation?: string,
    livingSituation?: string,
    activitiesInterest?: string[],
    dietaryPreferences?: string,
    mobility?: string,
    serviceProvider?: string,
    powerOfAttorney?: string,
    insuranceDetails?: string,
    income?: number,
    notes?: string,
    files?: File[]
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
    this.gender = gender;
    this.photo = photo;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.servicesReceived = servicesReceived;
    this.medicalRecords = medicalRecords;
    this.primaryDoctor = primaryDoctor;
    this.medicalConditions = medicalConditions;
    this.medications = medications;
    this.allergies = allergies;
    this.emergencyContactName = emergencyContactName;
    this.emergencyContactPhone = emergencyContactPhone;
    this.emergencyContactRelation = emergencyContactRelation;
    this.livingSituation = livingSituation;
    this.activitiesInterest = activitiesInterest;
    this.dietaryPreferences = dietaryPreferences;
    this.mobility = mobility;
    this.serviceProvider = serviceProvider;
    this.powerOfAttorney = powerOfAttorney;
    this.insuranceDetails = insuranceDetails;
    this.income = income;
    this.notes = notes;
    this.files = files;
  }
}
