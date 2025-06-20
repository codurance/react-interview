export interface CompanyData {
  name: string;
  address: string;
  phoneNumber: string
}

const companyData: CompanyData[] = [
  {
    name: 'Innovate Solutions Ltd.',
    address: '123 Innovation Drive, Tech Park, Reading, RG2 6GF',
    phoneNumber: '0118 496 0123',
  },
  {
    name: 'Apex Industries PLC',
    address: '45 Apex Tower, Canary Wharf, London, E14 5NP',
    phoneNumber: '020 7946 0456',
  },
  {
    name: 'QuantumLeap Analytics',
    address: '789 Science Park, Cambridge, CB4 0WZ',
    phoneNumber: '01223 496 0789',
  },
  {
    name: 'Starlight Retail Group',
    address: '321 High Street, Manchester, M1 1AA',
    phoneNumber: '0161 496 0321',
  },
  {
    name: 'Evergreen Logistics',
    address: '56 Logistics Way, Magna Park, Lutterworth, LE17 4XN',
    phoneNumber: '01455 496 0567',
  },
  {
    name: 'Pinnacle Construction',
    address: '89 Builders Lane, Birmingham, B2 4DT',
    phoneNumber: '0121 496 0890',
  },
  {
    name: 'Serenity Health & Wellness',
    address: '10 Serene Avenue, Bath, BA1 1SU',
    phoneNumber: '01225 496 0101',
  },
  {
    name: 'Fusion Digital Marketing',
    address: '24 Digital Road, Shoreditch, London, EC1V 9DD',
    phoneNumber: '020 7946 0245',
  },
  {
    name: 'Silverstream Financials',
    address: '1 City Square, Leeds, LS1 2ES',
    phoneNumber: '0113 496 0112',
  },
  {
    name: 'Bluebird Creative Agency',
    address: '67 Creative Quarter, Bristol, BS1 6EA',
    phoneNumber: '0117 496 0678',
  },
  {
    name: 'Oakwood Property Management',
    address: '90 Property Point, Edinburgh, EH2 4DL',
    phoneNumber: '0131 496 0901',
  },
  {
    name: 'Momentum Manufacturing',
    address: '15 Industrial Estate, Coventry, CV1 2WT',
    phoneNumber: '024 7649 6015',
  },
  {
    name: 'Golden Key Hospitality',
    address: '7 Hospitality Hub, York, YO1 7JF',
    phoneNumber: '01904 496 0077',
  },
  {
    name: 'Nexus Data Systems',
    address: '33 Data Drive, Milton Keynes, MK9 2FN',
    phoneNumber: '01908 496 0330',
  },
  {
    name: 'First-Rate Foods Distribution',
    address: '88 Distribution Way, Glasgow, G1 1XQ',
    phoneNumber: '0141 496 0888',
  },
];

export async function getCompanyData(): Promise<CompanyData[]> {
  return companyData;
}