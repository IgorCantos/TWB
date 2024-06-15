import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import HeatmapChart from 'src/components/charts/heatmap-chart';
import RangeBarChart from 'src/components/charts/range-bar-chart';

import BarChartCompare from 'src/components/charts/bar-chart-compare';
import { applyBrlMask } from 'src/utils/format-number';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BalanceChart from 'src/sections/financial-resume/components/balance-chart';
import DenseTable from 'src/components/tables/basic-table';
import { banks } from 'src/_mock/banks';
import Carousel from 'react-material-ui-carousel';
import LinearProgress from '@mui/material/LinearProgress';

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
  const [loadingProjection, setLoadingProjection] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [count, setCount] = useState(0);

  const textsProjectionLoading = [
    'Buscando os seus dados...',
    'Realizando projeções...',
    'Montando gráfico...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % textsProjectionLoading.length);
      setCount((prevCount) => prevCount + 1);
    }, 3000); // Troca a cada 2 segundos

    // Limpa o intervalo após 3 mudanças de texto
    if (count === 2) {
      clearInterval(interval);
      setLoadingProjection(false);
    }

    return () => clearInterval(interval);
  }, [textsProjectionLoading.length, count]);

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
            <Carousel
              next={() => {
                /* Do stuff */
              }}
              prev={() => {
                /* Do other stuff */
              }}
              navButtonsAlwaysVisible
              autoPlay={false}
              slide
            >
              <>
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
              </>

              <>
                {loadingProjection ? (
                  <Box sx={{ width: '100%', height: '492px', padding: '0 400px' }}>
                    <Box
                      textAlign="center"
                      sx={{
                        marginTop: '36%',
                      }}
                    >
                      <Typography variant="h5" mb={2}>
                        {textsProjectionLoading[textIndex]}
                      </Typography>
                      <LinearProgress />
                    </Box>
                  </Box>
                ) : (
                  <>
                    <CardHeader title="Projeção de gastos para o próximo mês" />
                    <BarChartCompare
                      chart={{
                        overides: {
                          colors: ['#008FFB'],
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
                            data: [67, 41, 21, 43, 43, 27, 41, 45.6, 22, 35.21, 56],
                          },
                        ],
                      }}
                    />
                  </>
                )}
              </>
            </Carousel>
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

      <Grid container spacing={3} my={0}>
        <Grid xs={12} md={6} lg={8}>
          <Card>
            <CardHeader title="Comparação de gastos de Junho x Agosto" />
            <BarChartCompare
              subheader="Subtitulo"
              chart={{
                labels: [...Array(30)].map((_, index) => index + 1),
                series: [
                  {
                    name: 'Julho',
                    type: 'area',
                    fill: 'gradient',
                    data: [
                      56, 25, 89, 19, 82, 14, 41, 3, 10, 32, 35, 55, 67, 78, 64, 38, 27, 7, 50, 45,
                      88, 21, 12, 69, 93, 5, 98, 90, 23, 73,
                    ],
                  },
                  {
                    name: 'Agosto',
                    type: 'area',
                    fill: 'gradient',
                    data: [
                      78, 35, 50, 32, 21, 64, 67, 7, 10, 45, 19, 38, 41, 25, 82, 89, 5, 88, 23, 3,
                      69, 56, 73, 55, 93, 98, 27, 14, 90, 12,
                    ],
                  },
                ],
              }}
            />
          </Card>
        </Grid>

        <Grid lg={4}>
          <Grid xs={12}>
            <BalanceChart
              subtitle="Gastos em Julho"
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
              subtitle="Gastos em Agosto"
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

          <Grid xs={12}>
            <BalanceChart
              subtitle="Você gastou R$ 200 a mais."
              title={`+${applyBrlMask(200)}`}
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
        <Grid xs={12} md={6} lg={8}>
          <Card>
            <CardHeader title="Comparação de recebimentos de Junho x Agosto" />
            <BarChartCompare
              subheader="Subtitulo"
              chart={{
                labels: [...Array(30)].map((_, index) => index + 1),
                series: [
                  {
                    name: 'Julho',
                    type: 'area',
                    fill: 'gradient',
                    data: [
                      56, 25, 89, 19, 82, 14, 41, 3, 10, 32, 35, 55, 67, 78, 64, 38, 27, 7, 50, 45,
                      88, 21, 12, 69, 93, 5, 98, 90, 23, 73,
                    ],
                  },
                  {
                    name: 'Agosto',
                    type: 'area',
                    fill: 'gradient',
                    data: [
                      78, 35, 50, 32, 21, 64, 67, 7, 10, 45, 19, 38, 41, 25, 82, 89, 5, 88, 23, 3,
                      69, 56, 73, 55, 93, 98, 27, 14, 90, 12,
                    ],
                  },
                ],
              }}
            />
          </Card>
        </Grid>

        <Grid lg={4}>
          <Grid xs={12}>
            <BalanceChart
              subtitle="Recebimentos em Julho"
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
              subtitle="Recebimentos em Agosto"
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

          <Grid xs={12}>
            <BalanceChart
              subtitle="Você recebeu R$ 200 a mais."
              title={`+${applyBrlMask(200)}`}
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
        <Grid xs={12} md={6} lg={8}>
          <Typography variant="h4" mt={3}>
            Principais gastos recorrentes
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
          <Card>
            <CardHeader title="Conta de luz x água" subheader='Colocar uma meta de redução das contas para o usuário alcançar' />
            <BarChartCompare
              subheader="Subtitulo"
              chart={{
                labels: [...Array(3)].map((_, index) => index + 1),
                series: [
                  {
                    name: 'Julho',
                    type: 'area',
                    fill: 'gradient',
                    data: [
                      56, 25
                    ],
                  },
                  {
                    name: 'Agosto',
                    type: 'area',
                    fill: 'gradient',
                    data: [
                      78, 35,
                    ],
                  },
                ],
              }}
            />
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
