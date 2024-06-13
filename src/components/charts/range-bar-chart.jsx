import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

export default function RangeBarChart({ title, subheader, chart }) {
  const { series, type, height } = chart;

  const chartOptions = useChart({
    chart: {
      type: 'rangeBar',
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: true,
      // formatter: (val) => {
      //   return `R$ ${val}`
      // }
    },
    tooltip: {
      shared: false,
      intersect: false,
    },
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          series={series}
          options={chartOptions}
          width="100%"
          height={height || 393}
          type={type}
        />
      </Box>
    </Card>
  );
}

RangeBarChart.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
