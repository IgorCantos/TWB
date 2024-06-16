import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { CHART_TYPES } from 'src/enums/chart-enums';
import PieChart from 'src/components/charts/pie-chart';
import { faker } from '@faker-js/faker';

const fakeData = {
  series: [
    { label: 'Crédito', value: faker.number.int({ min: 212, max: 999, precision: 0.01 }) },
    { label: 'Débito', value: faker.number.int({ min: 212, max: 999, precision: 0.01 }) },
    { label: 'Pix', value: faker.number.int({ min: 212, max: 999, precision: 0.01 }) },
  ],
};

export default function ExpensesByPaymentMethodChart() {
  const [chartType, setChartType] = useState(CHART_TYPES.pie);
  const [data, setData] = useState({
    series: [],
  });

  useEffect(() => {
    setData(fakeData);
  }, []);

  return (
    <Card sx={{ px: 3, pt: 3, pb: 2, minHeight: '622px' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <CardHeader
          title="Despesas por Método de Pagamento"
          sx={{ margin: '0px', padding: '0px' }}
        />
        <FormControl size="small" sx={{ width: '150px' }}>
          <InputLabel>Tipo</InputLabel>
          <Select
            value={chartType}
            label="Tipo"
            onChange={(event) => setChartType(event.target.value)}
          >
            <MenuItem value={CHART_TYPES.pie}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img src="/assets\icons\charts\pie-chart.svg" alt="" />
                <ListItemText primary="Pizza" sx={{ paddingLeft: '10px' }} />
              </Box>
            </MenuItem>

            <MenuItem value={CHART_TYPES.donut}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img src="/assets\icons\charts\donut-chart.svg" alt="" />
                <ListItemText primary="Circular" sx={{ paddingLeft: '10px' }} />
              </Box>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <PieChart
        chart={{
          type: chartType,
          height: 300,
          series: data.series,
        }}
      />
    </Card>
  );
}
