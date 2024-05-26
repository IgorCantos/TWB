import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(25)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  bankName: sample(['Santander', 'Itaú', 'Nubank']),
  transactionDate: sample(['13:04:55 - 26/05/2024', '08:26:32 - 25/03/2024']),
  category: sample(['Alimentação', 'Transporte', 'Viagens', 'Lazer']),
  type: sample(['Crédito', 'Pix', 'Débito', 'Parcelado']),
  amount: faker.finance.amount(),
  totalAccountAmount: faker.finance.amount(),
}));
