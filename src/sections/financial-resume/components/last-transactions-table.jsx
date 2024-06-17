import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import TableHead from '@mui/material/TableHead';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import TableFooter from '@mui/material/TableFooter';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Label from 'src/components/label';
import { applyBrlMask } from 'src/utils/format-number';

export const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
};

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
];

const banks = [...Array(7)].map((_, index) => ({
  id: faker.string.uuid(),
  bankName: BANKS_MOCK[index].name,
  customerFriendlyLogoUri: BANKS_MOCK[index].customerFriendlyLogoUri,
  transactionDate: sample(['13:04:55 - 26/05/2024', '08:26:32 - 25/03/2024']),
  category: sample(['Alimentação', 'Transporte', 'Viagens', 'Lazer']),
  type: sample(['Crédito', 'Pix', 'Débito', 'Parcelado']),
  amount: faker.number.int({ min: 4, max: 99, precision: 0.01 }),
}));

export default function LastTransactionsTable() {
  const dataFiltered = banks;

  const headLabel = [
    { id: 'bankName', label: 'Banco' },
    { id: 'amount', label: 'Valor' },
    { id: 'type', label: 'Tipo', align: 'left' },
    { id: 'category', label: 'Categoria' },
    { id: 'transactionDate', label: 'Data da transação' },
  ];

  return (
    <Card>
      <CardHeader title="Minhas últimas transações" sx={{ marginBottom: 1.5 }} />
      <TableContainer sx={{ overflow: 'unset' }}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              {headLabel.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.align || 'left'}
                  sx={{ width: headCell.width, minWidth: headCell.minWidth, fontWeight: 'bold' }}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFiltered.map((bank) => (
              <TableRow hover tabIndex={-1}>
                <TableCell component="th" scope="row">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Avatar
                      alt={bank.bankName}
                      src={bank.customerFriendlyLogoUri}
                      sx={{ width: 30, height: 30 }}
                    />

                    <Typography variant="subtitle2" noWrap>
                      {bank.bankName}
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>{applyBrlMask(bank.amount)}</TableCell>
                <TableCell>
                  <Label>{bank.type}</Label>
                </TableCell>
                <TableCell>
                  <Label>{bank.category}</Label>
                </TableCell>
                <TableCell>{bank.transactionDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>
                <Box display="flex" alignItems="center" justifyContent="center" width="100%">
                  <Button variant="text" href="/bancos/transacoes">
                    Ver todas
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Card>
  );
}
