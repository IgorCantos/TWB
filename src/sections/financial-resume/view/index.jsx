import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { applyBrlMask } from 'src/utils/format-number';
import { banks } from 'src/_mock/banks';
import Avatar from '@mui/material/Avatar';
import DenseTable from 'src/components/tables/basic-table';

import PieChart from '../../../components/charts/pie-chart';
import BarChartCompare from '../../../components/charts/bar-chart-compare';
import BalanceChart from '../components/balance-chart';
import RangeChart from '../../../components/charts/range-chart';

export const texts = {
  selects: {
    myBanks: 'Meus bancos',
    filterBy: 'Ver dados de',
    startFrom: 'Data de ínicio',
    endIn: 'Data final',
  },
  balance: {
    investments: 'Investimentos',
    totalPeriodExpenses: 'Quanto gastei',
    totalPeriodEntries: 'Quanto ganhei',
    finalBalance: 'Saldo final',
    netEvolution: 'Evolução saldo líquido mensal',
    vsExpense: 'Renda x Despesas',
  },
  expenses: {
    categorized: 'Despesas por categoria',
    byPaymentMethod: 'Despesas por Método de Pagamento',
  },
};

export default function FinancialResumeView() {
  const [bankSelected, setBankSelected] = useState([]);
  const [filterBy, setFilterBy] = useState('');

  const handleChangeBankSelect = (event) => {
    const {
      target: { value },
    } = event;
    setBankSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const handleChangeDataTypeSelect = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <Container maxWidth="xl">
      {/* Selects */}
      <Grid container spacing={3} my={0}>
        <Grid xs={12} sm={6} md={3}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="bank-select-label">{texts.selects.myBanks}</InputLabel>
            <Select
              labelId="bank-select-label"
              id="bank-select-checkbox"
              multiple
              value={bankSelected}
              onChange={handleChangeBankSelect}
              input={<OutlinedInput label={texts.selects.myBanks} />}
              renderValue={(selected) => selected.join(', ')}
            >
              {banks.map((bank) => (
                <MenuItem key={bank.id} value={bank.bankName}>
                  <Checkbox checked={bankSelected.indexOf(bank.bankName) > -1} />
                  <Avatar
                    alt={bank.bankName}
                    src={bank.customerFriendlyLogoUri}
                    sx={{ margin: '0 5px 0 0', width: 25, height: 25 }}
                  />
                  <ListItemText primary={bank.bankName} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">{texts.selects.filterBy}</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterBy}
              label={texts.selects.filterBy}
              onChange={handleChangeDataTypeSelect}
            >
              <MenuItem value={10}>Extrato de conta</MenuItem>
              <MenuItem value={20}>Cartões de crédito e débito</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: '100%' }}>
              <DatePicker label={texts.selects.startFrom} />
            </FormControl>
          </LocalizationProvider>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: '100%' }}>
              <DatePicker label={texts.selects.endIn} />
            </FormControl>
          </LocalizationProvider>
        </Grid>
      </Grid>

      {/* Renda x Despesa */}
      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={6} lg={8}>
          <BarChartCompare
            title={texts.balance.vsExpense}
            subheader="Subtitulo"
            chart={{
              labels: [
                '01/01/2024',
                '02/01/2024',
                '03/01/2024',
                '04/01/2024',
                '05/01/2024',
                '06/01/2024',
                '07/01/2024',
                '08/01/2024',
                '09/01/2024',
                '10/01/2024',
                '11/01/2024',
              ],
              series: [
                {
                  name: 'Renda',
                  type: 'area',
                  fill: 'gradient',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Despesa',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ],
            }}
          />
        </Grid>

        <Grid lg={4}>
          <Grid xs={12}>
            <BalanceChart
              subtitle={texts.balance.totalPeriodEntries}
              title={applyBrlMask(3221.79)}
              chart={{
                type: 'area',
                height: 146,
                series: [
                  { label: 'Jan', value: 400 },
                  { label: 'Fev', value: 430 },
                  { label: 'Mar', value: 448 },
                  { label: 'Abr', value: 470 },
                  { label: 'Mai', value: 540 },
                  { label: 'Jun', value: 580 },
                  { label: 'Jul', value: 690 },
                  { label: 'Ago', value: 1100 },
                  { label: 'Set', value: 1200 },
                  { label: 'Out', value: 1280 },
                  { label: 'Nov', value: 1330 },
                  { label: 'Dez', value: 1500 },
                ],
              }}
            />
          </Grid>

          <Grid xs={12} my={2}>
            <BalanceChart
              subtitle={texts.balance.totalPeriodExpenses}
              title={applyBrlMask(1783.15)}
              chart={{
                type: 'area',
                height: 146,
                series: [
                  { label: 'Jan', value: 400 },
                  { label: 'Fev', value: 430 },
                  { label: 'Mar', value: 448 },
                  { label: 'Abr', value: 470 },
                  { label: 'Mai', value: 540 },
                  { label: 'Jun', value: 580 },
                  { label: 'Jul', value: 690 },
                  { label: 'Ago', value: 1100 },
                  { label: 'Set', value: 1200 },
                  { label: 'Out', value: 1280 },
                  { label: 'Nov', value: 1330 },
                  { label: 'Dez', value: 1500 },
                ],
              }}
            />
          </Grid>

          <Grid xs={12} my={2}>
            <BalanceChart
              subtitle={texts.balance.finalBalance}
              title={applyBrlMask(1438.64)}
              chart={{
                type: 'area',
                height: 146,
                series: [
                  { label: 'Jan', value: 400 },
                  { label: 'Fev', value: 430 },
                  { label: 'Mar', value: 448 },
                  { label: 'Abr', value: 470 },
                  { label: 'Mai', value: 540 },
                  { label: 'Jun', value: 580 },
                  { label: 'Jul', value: 690 },
                  { label: 'Ago', value: 1100 },
                  { label: 'Set', value: 1200 },
                  { label: 'Out', value: 1280 },
                  { label: 'Nov', value: 1330 },
                  { label: 'Dez', value: 1500 },
                ],
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={6} lg={6}>
          <PieChart
            title={texts.expenses.categorized}
            subheader="Subtitulo"
            chart={{
              series: [
                { label: 'Alimentação', value: 4344 },
                { label: 'Saúde', value: 800 },
                { label: 'Lazer', value: 1443 },
                { label: 'Transporte', value: 2700 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <PieChart
            title={texts.expenses.byPaymentMethod}
            subheader="Subtitulo"
            chart={{
              series: [
                { label: 'Crédito', value: 4344 },
                { label: 'Débito', value: 800 },
                { label: 'Pix', value: 1443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={12}>
          <RangeChart
            title="Evolução saldo líquido mensal"
            subtitle="Subtitulo"
            chart={{
              type: 'bar',
              height: 425,
              series: [
                { label: 'Jan', value: 400 },
                { label: 'Fev', value: 430 },
                { label: 'Mar', value: 448 },
                { label: 'Abr', value: 470 },
                { label: 'Mai', value: 540 },
                { label: 'Jun', value: 580 },
                { label: 'Jul', value: 690 },
                { label: 'Ago', value: 1100 },
                { label: 'Set', value: 1200 },
                { label: 'Out', value: 1280 },
                { label: 'Nov', value: 1330 },
                { label: 'Dez', value: 1500 },
              ],
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12}>
          <DenseTable
            rows={banks.slice(0, 5)}
            headLabel={[
              { id: 'bankName', label: 'Banco' },
              { id: 'transactionDate', label: 'Data da transação' },
              { id: 'cardNumber', label: 'Final do cartão' },
              { id: 'category', label: 'Categoria' },
              { id: 'type', label: 'Tipo', align: 'left' },
              { id: 'amount', label: 'Valor (R$)' },
              { id: 'totalAccountAmount', label: 'Saldo total (R$)' },
              { id: '' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
