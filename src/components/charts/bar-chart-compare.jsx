import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from 'src/components/chart';

export default function BarChartCompare({ title, subheader, chart }) {
  const { labels, series, height } = chart;

  const chartOptions = useChart({
    plotOptions: {
      bar: {
        columnWidth: '30%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
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
        />
      </Box>
    </Card>
  );
}

BarChartCompare.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
