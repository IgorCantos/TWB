import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import { applyBrlMask } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function RangeChart({ title, subtitle, chart }) {
  const { series, type } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    tooltip: {
      marker: { show: true },
      y: {
        formatter: (value) => applyBrlMask(value),
        title: {
          formatter: () => 'R$',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subtitle} />

      <Box sx={{ mx: 3 }}>
        <Chart
          type={type}
          series={[{ data: chartSeries }]}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

RangeChart.propTypes = {
  chart: PropTypes.object,
  subtitle: PropTypes.string,
  title: PropTypes.string,
};
