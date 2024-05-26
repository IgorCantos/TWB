import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import { applyBrlMask } from 'src/utils/format-number';

import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">


      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Saldo ínicial"
            total={applyBrlMask(3200)}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Despesas totais no período"
            total={applyBrlMask(-1400)}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Entradas totais no período"
            total={applyBrlMask(1800)}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Saldo final"
            subheader="Subtitulo"
            total={applyBrlMask(3600)}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Renda vs Despesas"
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
                  type: 'bar',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Despesa',
                  type: 'bar',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Despesas categorizadas"
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

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Despesas por Método de Pagamento"
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

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Evolução saldo líquido mensal"
            subheader="Subtitulo"
            chart={{
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
    </Container>
  );
}
