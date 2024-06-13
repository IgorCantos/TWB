import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Chart, { useChart } from 'src/components/chart';
import { applyBrlMask } from 'src/utils/format-number';

export default function BarChartCompare({ title, subheader, chart }) {
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
    <Box sx={{ p: 3, pb: 1 }}>
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

BarChartCompare.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
