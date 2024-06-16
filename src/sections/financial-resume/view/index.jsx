import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import FormControl from '@mui/material/FormControl';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { banks } from 'src/_mock/banks';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import DenseTable from 'src/components/tables/basic-table';
import CreateAdSenseAd from 'src/components/ads/ad-sense';
import BuyPremiumAction from 'src/components/premium/buy-premium';

import RadialChart from 'src/components/charts/radial-chart';
import PieChart from '../../../components/charts/pie-chart';
import BarChartCompare from '../../../components/charts/bar-chart-compare';
import ChartIncomeVsOutcome from '../components/chart-income-outcome';
import ChartOutcomeCategories from '../components/outcome-categories';

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
          <ChartIncomeVsOutcome />
        </Grid>

        <Grid xs={12} md={4}>
          <ChartOutcomeCategories />
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={6}>
          <PieChart
            title={texts.expenses.byPaymentMethod}
            subheader="Subtitulo"
            chart={{
              type: 'donut',
              height: 300,
              series: [
                { label: 'Crédito', value: 4344 },
                { label: 'Débito', value: 800 },
                { label: 'Pix', value: 1443 },
              ],
            }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={6} lg={8}>
          <Typography variant="h4" mt={3}>
            Meus investimentos
          </Typography>
        </Grid>
      </Grid>

      {/* Investimentos */}
      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={6} lg={12}>
          <Card>
            <BarChartCompare
              chart={{
                labels: [
                  'Jan',
                  'Fev',
                  'Mar',
                  'Abr',
                  'Mai',
                  'Jun',
                  'Jul',
                  'Ago',
                  'Set',
                  'Out',
                  'Nov',
                  'Dez',
                ],
                series: [
                  {
                    name: 'Ações',
                    type: 'bar',
                    fill: 'gradient',
                    data: [4200, 1300, 4900, 3500, 2100, 3700, 2600, 4500, 5000, 2300, 1800, 3900],
                  },
                  {
                    name: 'Fundos imobiliarios',
                    type: 'bar',
                    fill: 'gradient',
                    data: [3300, 1700, 4100, 2800, 3900, 2200, 3100, 2700, 3000, 1900, 2100, 4400],
                  },
                  {
                    name: 'Renda fixa',
                    type: 'bar',
                    fill: 'gradient',
                    data: [3400, 2900, 3800, 2200, 3100, 2700, 3200, 2500, 2000, 3600, 2400, 3000],
                  },
                  {
                    name: 'Criptomoedas',
                    type: 'bar',
                    fill: 'gradient',
                    data: [1352, 3821, 3424, 2121, 3374, 2651, 3128, 2271, 1970, 3531, 2229, 3205],
                  },
                  {
                    name: 'Outros',
                    type: 'bar',
                    fill: 'gradient',
                    data: [1500, 1900, 2900, 1000, 3000, 1200, 2700, 1700, 2200, 1400, 3100, 2400],
                  },
                ],
              }}
            />
          </Card>
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
        <Grid xs={12} md={6} lg={8}>
          <Typography variant="h4" mt={3}>
            Minhas últimas transações
          </Typography>
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
