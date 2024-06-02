import { faker } from '@faker-js/faker';

const BANKS_MOCK = [
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
];

export const banks = [...Array(2)].map((_, index) => ({
  id: faker.string.uuid(),
  name: BANKS_MOCK[index].name,
  customerFriendlyLogoUri: BANKS_MOCK[index].customerFriendlyLogoUri,
}));
