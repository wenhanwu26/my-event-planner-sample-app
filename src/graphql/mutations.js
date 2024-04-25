/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSenior = /* GraphQL */ `
  mutation CreateSenior(
    $input: CreateSeniorInput!
    $condition: ModelSeniorConditionInput
  ) {
    createSenior(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      gender
      photo
      address
      phoneNumber
      email
      primaryDoctor
      medicalConditions
      medications
      allergies
      emergencyContactName
      emergencyContactPhone
      emergencyContactRelation
      livingSituation
      activitiesInterest
      dietaryPreferences
      mobility
      servicesReceived
      serviceProvider
      powerOfAttorney
      insuranceDetails
      income
      notes
      files {
        id
        fileName
        filePath
        description
        tags
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSenior = /* GraphQL */ `
  mutation UpdateSenior(
    $input: UpdateSeniorInput!
    $condition: ModelSeniorConditionInput
  ) {
    updateSenior(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      gender
      photo
      address
      phoneNumber
      email
      primaryDoctor
      medicalConditions
      medications
      allergies
      emergencyContactName
      emergencyContactPhone
      emergencyContactRelation
      livingSituation
      activitiesInterest
      dietaryPreferences
      mobility
      servicesReceived
      serviceProvider
      powerOfAttorney
      insuranceDetails
      income
      notes
      files {
        id
        fileName
        filePath
        description
        tags
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSenior = /* GraphQL */ `
  mutation DeleteSenior(
    $input: DeleteSeniorInput!
    $condition: ModelSeniorConditionInput
  ) {
    deleteSenior(input: $input, condition: $condition) {
      id
      firstName
      lastName
      dob
      gender
      photo
      address
      phoneNumber
      email
      primaryDoctor
      medicalConditions
      medications
      allergies
      emergencyContactName
      emergencyContactPhone
      emergencyContactRelation
      livingSituation
      activitiesInterest
      dietaryPreferences
      mobility
      servicesReceived
      serviceProvider
      powerOfAttorney
      insuranceDetails
      income
      notes
      files {
        id
        fileName
        filePath
        description
        tags
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
