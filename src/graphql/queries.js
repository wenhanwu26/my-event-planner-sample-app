/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSenior = /* GraphQL */ `
  query GetSenior($id: ID!) {
    getSenior(id: $id) {
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
export const listSeniors = /* GraphQL */ `
  query ListSeniors(
    $filter: ModelSeniorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeniors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
