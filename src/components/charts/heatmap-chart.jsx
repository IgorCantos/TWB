import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

export default function HeartmapChart({ title, subheader, chart }) {
  const { labels, series, type, height } = chart;

  const chartOptions = useChart({
    labels,
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `R$ ${value.toFixed(0)}`;
          }
          return value;
        },
      },
      x: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return `Dia ${value}`;
          }
          return value;
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart series={series} options={chartOptions} width="100%" height={height || 393} type={type} />
      </Box>
    </Card>
  );
}

HeartmapChart.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
