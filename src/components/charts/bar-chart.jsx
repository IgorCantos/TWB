import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Chart, { useChart } from 'src/components/chart';
import { applyBrlMask } from 'src/utils/format-number';

export default function BarChart({ chart }) {
  const { labels, series, height, overides, type } = chart;

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
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => {
          if (typeof value !== 'undefined') {
            return applyBrlMask(value);
          }
          return value;
        },
      },
    },
    ...overides,
  });

  return (
    <Box>
      <Chart
        series={series}
        options={chartOptions}
        width="100%"
        type={type}
        height={height || 393}
      />
    </Box>
  );
}

BarChart.propTypes = {
  chart: PropTypes.object,
};
