import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import CreateAdSenseAd from 'src/components/ads/ad-sense';
import BuyPremiumAction from 'src/components/premium/buy-premium';
import RadialChart from 'src/components/charts/radial-chart';
import LastTransactionsTable from '../components/last-transactions-table';
import IncomeVsExpensesChart from '../components/income-vs-expenses-chart';
import ExpensesByCategoryChart from '../components/expenses-by-category-chart';
import ExpensesByPaymentMethodChart from '../components/expenses-by-payment-method-chart';

export const texts = {
  selects: {
    myBanks: 'Meus bancos',
    filterBy: 'Ver dados de',
    startFrom: 'Data inicial',
    endIn: 'Data final',
  },
  balance: {
    investments: 'Investimentos',
    totalPeriodExpenses: 'Quanto gastei',
    totalPeriodEntries: 'Quanto recebi',
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
  const defaultSpacing = 3;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={defaultSpacing}>
        <Grid xs={12} sm={6} md={9}>
          <Card>
            <BuyPremiumAction />
          </Card>
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <Card sx={{ maxWidth: '336px', minHeight: '280px' }}>
            <CreateAdSenseAd />
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={3} my={0} alignItems="center">
        <Grid xs={12} md={2}>
          <Typography variant="h4">Resumo financeiro</Typography>
        </Grid>

        <Grid xs={12} sm={6} md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: '100%' }}>
              <DatePicker label={texts.selects.startFrom} />
            </FormControl>
          </LocalizationProvider>
        </Grid>

        <Grid xs={12} sm={6} md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <FormControl sx={{ width: '100%' }}>
              <DatePicker label={texts.selects.endIn} />
            </FormControl>
          </LocalizationProvider>
        </Grid>
      </Grid>

      {/* Renda x Despesa */}
      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={8}>
          <IncomeVsExpensesChart />
        </Grid>

        <Grid xs={12} md={4}>
          <ExpensesByCategoryChart />
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={4}>
          <ExpensesByPaymentMethodChart />
        </Grid>

        <Grid xs={12} md={8}>
          <LastTransactionsTable />
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={6} lg={8}>
          <Typography variant="h4" mt={3}>
            Minhas metas financeiras
          </Typography>
        </Grid>
      </Grid>

      {/* Minhas metas */}
      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={4}>
          <RadialChart
            title=""
            chart={{
              type: 'radialBar',
              height: 340,
              labels: ['Lançar APP', 'Vender pro Nubank', 'Ficar rico'],
              series: [97, 34, 78],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <RadialChart
            title=""
            chart={{
              type: 'radialBar',
              height: 340,
              labels: ['Lançar APP', 'Vender pro Nubank', 'Ficar rico'],
              series: [97, 34, 78],
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12}>
          <Typography variant="h4" mt={3}>
            Próximos pagamentos fixos
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={3}>
          <Card
            sx={{
              borderRadius: 2,
              p: 3,
            }}
          >
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                Conta de luz
              </Typography>
              <Typography variant="subtitle" sx={{ color: 'text.disabled' }}>
                R$ 120,00
              </Typography>
              <br />
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Vence em: 05/07
              </Typography>
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12} md={3}>
          <Card
            sx={{
              borderRadius: 2,
              p: 3,
            }}
          >
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                Conta de água
              </Typography>
              <Typography variant="subtitle" sx={{ color: 'text.disabled' }}>
                R$ 120,00
              </Typography>
              <br />
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Vence em: 05/07
              </Typography>
            </Stack>
          </Card>
        </Grid>

        <Grid xs={12} md={3}>
          <Card
            sx={{
              borderRadius: 2,
              p: 3,
            }}
          >
            <Stack direction="column" justifyContent="center" alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                Conta de internet
              </Typography>
              <Typography variant="subtitle" sx={{ color: 'text.disabled' }}>
                R$ 120,00
              </Typography>
              <br />
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Vence em: 05/07
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
