import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chart, { useChart } from 'src/components/chart';
import { applyBrlMask } from 'src/utils/format-number';

export default function BalanceChart({ title, subtitle, chart }) {
  const { series, type } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value) => applyBrlMask(value),
        title: {
          formatter: () => 'R$',
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      categories: series.map((i) => i.label),
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  });

  return (
    <Card
      direction="column"
      sx={{
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          px: 3,
          pt: 3,
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {subtitle}
        </Typography>

        <Typography variant="h4">{title}</Typography>
      </Box>


      <Chart
        type={type}
        series={[{ data: chartSeries }]}
        options={chartOptions}
        height={100}
      />
    </Card>
  );
}

BalanceChart.propTypes = {
  title: PropTypes.number,
  subtitle: PropTypes.string,
  chart: PropTypes.object,
};
