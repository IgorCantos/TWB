import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import BarChartCompare from 'src/components/charts/bar-chart-compare';
import { CHART_TYPES } from 'src/enums/chart-enums';
import { faker } from '@faker-js/faker';
import { applyBrlMask } from 'src/utils/format-number';

const fakeData = {
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
      fill: 'gradient',
      data: [...Array(11)].map(() => faker.number.int({ min: 4, max: 99, precision: 0.01 })),
    },
    {
      name: 'Despesas',
      fill: 'gradient',
      data: [...Array(11)].map(() => faker.number.int({ min: 4, max: 99, precision: 0.01 })),
    },
  ],
};

export default function ChartIncomeVsOutcome() {
  const [chartType, setChartType] = useState(CHART_TYPES.area);
  const [data, setData] = useState({
    labels: [],
    series: [],
  });

  useEffect(() => {
    setData(fakeData);
  }, []);

  const totalIncomes = data.series
    .filter((item) => item.name === 'Renda')[0]
    ?.data?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalOutcomes = data.series
    .filter((item) => item.name === 'Despesas')[0]
    ?.data?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const finalBalance = totalIncomes - totalOutcomes;

  return (
    <Card sx={{ px: 3, pt: 3, pb: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
        <CardHeader title="Renda x Despesas" sx={{ margin: '0px', padding: '0px' }} />
        <FormControl size="small" sx={{ width: '150px' }}>
          <InputLabel>Tipo</InputLabel>
          <Select
            value={chartType}
            label="Tipo"
            onChange={(event) => setChartType(event.target.value)}
          >
            <MenuItem value={CHART_TYPES.bar}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img src="/assets\icons\charts\bar-chart.svg" alt="" />
                <ListItemText primary="Barra" sx={{ paddingLeft: '10px' }} />
              </Box>
            </MenuItem>

            <MenuItem value={CHART_TYPES.area}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <img src="/assets\icons\charts\line-chart.svg" alt="" />
                <ListItemText primary="Linha" sx={{ paddingLeft: '10px' }} />
              </Box>
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Card
          variant="outlined"
          sx={{
            p: 1.5,
            my: 3,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Box textAlign="center">
            <Typography
              variant="body2"
              sx={{
                color: 'text.disabled',
              }}
            >
              Renda total
            </Typography>
            <Typography variant="h5">{totalOutcomes && applyBrlMask(totalOutcomes)}</Typography>
          </Box>

          <Box textAlign="center">
            <Typography
              variant="body2"
              sx={{
                color: 'text.disabled',
              }}
            >
              Despesas totais
            </Typography>
            <Typography variant="h5">{totalIncomes && applyBrlMask(totalIncomes)}</Typography>
          </Box>

          <Box textAlign="center">
            <Typography
              variant="body2"
              sx={{
                color: 'text.disabled',
              }}
            >
              Saldo final
            </Typography>
            <Typography variant="h5">{finalBalance && applyBrlMask(finalBalance)}</Typography>
          </Box>
        </Card>
      </Box>

      <BarChartCompare
        chart={{
          type: chartType,
          labels: data.labels,
          series: data.series,
        }}
      />
    </Card>
  );
}
