import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import HeatmapChart from 'src/components/charts/heatmap-chart';
import RangeBarChart from 'src/components/charts/range-bar-chart';

import BarChartCompare from 'src/components/charts/bar-chart-compare';
import { applyBrlMask } from 'src/utils/format-number';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';

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
      {/* <Grid container spacing={3} my={0}>
        <Grid xs={12}>
          <Typography variant="h4">Recebimentos e pagamentos</Typography>
        </Grid>
      </Grid> */}

      <Grid container spacing={3} my={0}>
        <Grid xs={12}>
          <Card>
            <CardHeader title="Média móvel das minhas compras/despesas" />
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
                    name: 'Despesa',
                    type: 'area',
                    fill: 'gradient',
                    data: [45.6, 35.21, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                  },
                ],
              }}
            />
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} my={0}>
        <Grid xs={12} lg={6}>
          <HeatmapChart
            title="Dias que mais gastei no mes"
            chart={{
              type: 'heatmap',
              height: 200,
              labels: [...Array(30)].map((_, index) => index + 1),
              series: [
                {
                  name: 'Gastos',
                  data: generateData(30, {
                    min: 0,
                    max: 90,
                  }),
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} lg={6}>
          <HeatmapChart
            title="Dias que mais recebi no mes"
            chart={{
              type: 'heatmap',
              height: 200,
              labels: [...Array(30)].map((_, index) => index + 1),
              series: [
                {
                  name: 'Recebimentos',
                  data: generateData(30, {
                    min: 0,
                    max: 90,
                  }),
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12}>
          <RangeBarChart
            title="Próximos parcelamentos a serem pagos"
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
    </Container>
  );
}

const generateData = (daysInMonth, yrange) => {
  const series = [];
  for (let i = 1; i <= daysInMonth; i += 1) {
    const day = `Parcela ${i}`;
    const value = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x: day, y: value });
  }
  return series;
};
