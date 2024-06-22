import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import BarChartCompare from 'src/components/charts/bar-chart';
import { applyBrlMask } from 'src/utils/format-number';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import { faker } from '@faker-js/faker';
import IncomeByMonth from '../components/incomes-by-month';
import OutcomesByMonth from '../components/outcomes-by-month';

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

export default function HistoricAnalysisView() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} my={0}>
        <Grid xs={12}>
          <Card>
            <CardHeader title="Minha Média de Gastos ao Longo do Tempo" />
            <BarChartCompare
              chart={{
                overides: {
                  dataLabels: {
                    enabled: true,
                    formatter: (value) => {
                      if (typeof value !== 'undefined') {
                        return applyBrlMask(value);
                      }
                      return value;
                    },
                  },
                },
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
                    name: 'Junho',
                    type: 'area',
                    fill: 'gradient',
                    data: [...Array(11)].map(() =>
                      faker.number.int({ min: 4, max: 99, precision: 0.01 })
                    ),
                  },
                  {
                    name: 'Julho (gasto previsto)',
                    type: 'area',
                    fill: 'gradient',
                    data: [...Array(11)].map(() =>
                      faker.number.int({ min: 4, max: 99, precision: 0.01 })
                    ),
                  },
                ],
              }}
            />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12}>
          <Card>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Box width="50%">
                <CardHeader title="Possível redução de despesas" />
                <BarChartCompare
                  chart={{
                    overides: {
                      plotOptions: {
                        bar: {
                          borderRadius: 0,
                          horizontal: true,
                          barHeight: '80%',
                          isFunnel: true,
                          columnWidth: 'auto',
                        },
                      },
                      dataLabels: {
                        enabled: true,
                      },
                    },
                    type: 'bar',
                    labels: ['01/01/2024', '02/01/2024', '03/01/2024'],
                    series: [
                      {
                        name: 'Despesa',
                        data: [200, 100, 50],
                      },
                    ],
                  }}
                />
              </Box>
              <Box width="50%" textAlign="center">
                <small>(melhorar texto)</small>
                <br />
                Identificamos que você poderá economizar R$ 150 reais no próximo mes se conseguir
                cortar os seguintes gastos recorrentes:
                <br />
                <br />
                - Compra de doces (10x no ultimo mes) - Total R$ 100
                <br />- Mensalidade Netflix - Total R$ 50
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} lg={6}>
          <OutcomesByMonth />
        </Grid>

        <Grid xs={12} lg={6}>
          <IncomeByMonth />
        </Grid>
      </Grid>
    </Container>
  );
}
