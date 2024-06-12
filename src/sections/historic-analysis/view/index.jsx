import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import HeartmapChart from 'src/components/charts/heatmap-chart';

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
          <HeartmapChart
            title='Dias que mais gastei no mes'
            chart={{
              type: 'heatmap',
              height: 200,
              labels: [...Array(30)].map((_, index) => index + 1),
              series: [{
                name: 'Gastos totais',
                data: generateData(30, {
                  min: 0,
                  max: 90
                })
              },

              ],
            }}
          />
        </Grid>


      </Grid>

    </Container>
  );
}


const generateData = (daysInMonth, yrange) => {
  const series = [];
  for (let i = 1; i <= daysInMonth; i += 1) {
    const day = `Dia ${i}`;
    const value = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({ x: day, y: value });
  }
  return series;
};