export interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  submissionDate: string;
  country: string;
  verified: boolean;
  rating: number;
}

const userData: UserData[] = [
  {
    id: '9da70cb8-4d17-4d79-ae93-8b6c47662c2c',
    firstName: 'Quinta',
    lastName: 'Kertess',
    submissionDate: '1676549713000',
    country: 'Bolivia',
    verified: false,
    rating: 5,
  },
  {
    id: 'c4f42f53-b1dc-4ff2-aca5-3ea19ecc77ed',
    firstName: 'Lindsey',
    lastName: 'Ezzell',
    submissionDate: '1653938543000',
    country: 'Czech Republic',
    verified: true,
    rating: 4,
  },
  {
    id: '25c7439d-151d-4ded-bc25-b7f266aace33',
    firstName: 'Rosaleen',
    lastName: 'Clemonts',
    submissionDate: '1655673344000',
    country: 'Argentina',
    verified: false,
    rating: 1,
  },
  {
    id: 'cf20d09c-6eef-45b7-af2f-12b4c86d1627',
    firstName: 'Lemuel',
    lastName: 'Shire',
    submissionDate: '1679324548000',
    country: 'United States',
    verified: false,
    rating: 1,
  },
  {
    id: 'ecc7916a-3f95-41a9-ae60-0005b64c0a7d',
    firstName: 'Fraser',
    lastName: 'Purkiss',
    submissionDate: '1647811929000',
    country: 'Sweden',
    verified: false,
    rating: 1,
  },
  {
    id: 'bb636968-a2b1-4832-911b-7f09b2cb2ce4',
    firstName: 'Hali',
    lastName: 'Finnan',
    submissionDate: '1676135439000',
    country: 'China',
    verified: true,
    rating: 1,
  },
  {
    id: '723b5e08-74df-45d7-ab3e-d5f9c4775839',
    firstName: 'Rebeka',
    lastName: 'Slyford',
    submissionDate: '1644219508000',
    country: 'Thailand',
    verified: true,
    rating: 2,
  },
  {
    id: 'cd6328fc-3c73-426b-854f-35a7dc64f7e1',
    firstName: 'Salim',
    lastName: 'Blincoe',
    submissionDate: '1641164434000',
    country: 'China',
    verified: true,
    rating: 4,
  },
  {
    id: 'ab93c7de-2ba4-4445-a1ba-94ac92f1abba',
    firstName: 'Koressa',
    lastName: 'Pessel',
    submissionDate: '1655418991000',
    country: 'China',
    verified: false,
    rating: 3,
  },
  {
    id: '980469fa-1db0-4003-8ec8-3caa1b2052e9',
    firstName: 'Maude',
    lastName: 'Teenan',
    submissionDate: '1678427263000',
    country: 'China',
    verified: false,
    rating: 5,
  },
  {
    id: '8416bb61-2284-4898-90db-84ee2ebe3ab0',
    firstName: 'Adrian',
    lastName: 'Peacop',
    submissionDate: '1668791548000',
    country: 'China',
    verified: true,
    rating: 1,
  },
  {
    id: 'b5de4d66-97cb-41c9-bd1a-47f39b5967e1',
    firstName: 'Sophronia',
    lastName: 'Sherwill',
    submissionDate: '1670130448000',
    country: 'China',
    verified: true,
    rating: 1,
  },
  {
    id: '20fdfa3b-1d47-4056-b751-3874420871a3',
    firstName: 'Fanchon',
    lastName: 'Atyea',
    submissionDate: '1660231069000',
    country: 'Latvia',
    verified: true,
    rating: 3,
  },
  {
    id: '0103aba4-1b11-4cac-934a-24d6ff495c9a',
    firstName: 'Dena',
    lastName: 'Clunan',
    submissionDate: '1680134713000',
    country: 'Portugal',
    verified: false,
    rating: 4,
  },
  {
    id: '9f673bdd-c977-4203-9f0c-2f741b462ba3',
    firstName: 'Gus',
    lastName: 'Ney',
    submissionDate: '1661654680000',
    country: 'China',
    verified: false,
    rating: 3,
  },
  {
    id: '989eecac-ca83-4335-92ff-9df388c4fa5b',
    firstName: 'Kassey',
    lastName: 'Kinzel',
    submissionDate: '1665684945000',
    country: 'South Korea',
    verified: false,
    rating: 1,
  },
  {
    id: 'b962363e-16ea-4d75-a531-d8102896c5ca',
    firstName: 'Vivie',
    lastName: 'Benesevich',
    submissionDate: '1678767918000',
    country: 'China',
    verified: false,
    rating: 3,
  },
  {
    id: '12c604ef-cc1e-4fbe-bb54-dc59a7897e87',
    firstName: 'Deirdre',
    lastName: 'Swanborrow',
    submissionDate: '1651214816000',
    country: 'Peru',
    verified: true,
    rating: 4,
  },
  {
    id: 'e166f86f-4d78-4eda-a86a-c491797d0681',
    firstName: 'Leonelle',
    lastName: 'Petrashkov',
    submissionDate: '1661071298000',
    country: 'Poland',
    verified: false,
    rating: 1,
  },
  {
    id: 'df7f11aa-8aef-4358-97b2-8b78fc8d680a',
    firstName: 'Roth',
    lastName: 'Yurasov',
    submissionDate: '1644979120000',
    country: 'South Africa',
    verified: true,
    rating: 1,
  },
];

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// MOCK User API, this will simulate returning different results
// as if the data is evolving
export async function getUserData(): Promise<UserData[]> {
  return shuffleArray(userData);
}
