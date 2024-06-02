import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

const BANKS_MOCK = [
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
  {
    name: 'Banco Santander',
    customerFriendlyLogoUri:
      'https://cms.santander.com.br/sites/WPS/imagem/santander_chama/23-10-31_194829_P_santander_chama.svg',
  },
  {
    name: 'Nubank',
    customerFriendlyLogoUri: 'https://nuapp.nubank.com.br/open-banking/logo.svg',
  },
];

export const banks = [...Array(19)].map((_, index) => ({
  id: faker.string.uuid(),
  bankName: BANKS_MOCK[index].name,
  customerFriendlyLogoUri: BANKS_MOCK[index].customerFriendlyLogoUri,
  transactionDate: sample(['13:04:55 - 26/05/2024', '08:26:32 - 25/03/2024']),
  category: sample(['Alimentação', 'Transporte', 'Viagens', 'Lazer']),
  type: sample(['Crédito', 'Pix', 'Débito', 'Parcelado']),
  amount: faker.finance.amount(),
  totalAccountAmount: faker.finance.amount(),
}));
