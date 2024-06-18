import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import RadialChart from 'src/components/charts/radial-chart';

export default function FinancialGoalsChart() {
  return (
    <Card sx={{ px: 3, py: 3 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <CardHeader title="Metas financeiras" sx={{ margin: '0px', padding: '0px' }} />
      </Box>

      {[
        {
          name: 'Criar app',
          data: [44],
        },
        {
          name: 'Vender nubank',
          data: [34],
        },
        {
          name: 'Ficar rico',
          data: [24],
        },
      ].map((serie) => (
        <RadialChart
          key={serie.name}
          chart={{
            type: 'bar',
            height: 60,
            series: serie,
          }}
        />
      ))}

      <Box display="flex" alignItems="center" justifyContent="center" width="100%" mt={2}>
        <Button variant="text">Ver todas</Button>
      </Box>
    </Card>
  );
}
