import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import FormControl from '@mui/material/FormControl';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';

import CreateAdSenseAd from 'src/components/ads/ad-sense';
import BuyPremiumAction from 'src/components/premium/buy-premium';
import IncomeVsExpensesChart from '../components/income-vs-expenses-chart';
import ExpensesByCategoryChart from '../components/expenses-by-category-chart';
import ExpensesByPaymentMethodChart from '../components/expenses-by-payment-method-chart';
import FinancialGoalsChart from '../components/financial-goals-chart';
import TopSpendingDays from '../components/income-vs-expenses-chart copy';

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

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={3}>
          <ExpensesByPaymentMethodChart />
        </Grid>
        <Grid xs={12} md={6}>
          <IncomeVsExpensesChart />
        </Grid>

        <Grid xs={12} md={3}>
          <ExpensesByCategoryChart />
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} lg={6}>
          <TopSpendingDays />
        </Grid>

        <Grid xs={12} md={6}>
          <FinancialGoalsChart />
        </Grid>
      </Grid>

      {/* <Grid container spacing={3} my={0}>
        <Grid xs={12}>
          <RangeBarChart
            title="Próximas compras parceladas a pagar"
            chart={{
              type: 'rangeBar',
              height: 300,
              // labels: [...Array(5)].map((_, index) => index + 1),
              series: [
                {
                  name: 'Amazon',
                  data: [
                    {
                      x: 'Julho',
                      y: [11, 31],
                    },
                    {
                      x: 'Agosto',
                      y: [41, 61],
                    },
                  ],
                },
                {
                  name: 'Mercado Livre',
                  data: [
                    {
                      x: 'Julho',
                      y: [20, 34],
                    },
                    {
                      x: 'Agosto',
                      y: [41, 61],
                    },
                  ],
                },
                {
                  name: 'W.Saude',
                  data: [
                    {
                      x: 'Agosto',
                      y: [5, 22],
                    },
                    {
                      x: 'Setembro',
                      y: [27, 43],
                    },
                  ],
                },
              ],
            }}
          />
        </Grid>
      </Grid> */}

      {/* <Grid container spacing={3} my={0}>
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
                Conta de água. Hey, igor, sua contá irá vencer no dia xx, não se esqueça de pagar!
                (whatsapp, notificação aqui)
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
      </Grid> */}
    </Container>
  );
}
