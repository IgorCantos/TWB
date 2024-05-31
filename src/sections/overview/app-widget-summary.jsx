import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  const series = {
    labels: ['01/01/2024', '04/01/2024', '07/01/2024', '10/01/2024', '12/01/2024'],
    series: [
      {
        name: 'Renda',
        type: 'area',
        data: [10, 11, 11, 12, 14],
      },
    ],
  };

  const chartOptions = useChart({
    fill: {
      type: series.series.map((i) => i.fill),
    },
    labels: series.labels,
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    stroke: {
      curve: 'smooth',
    },
  });

  return (
    <Card
      component={Stack}
      spacing={3}
      direction="column"
      sx={{
        borderRadius: 2,
      }}
    >
      <Stack
        spacing={0.5}
        sx={{
          px: 3,
          pt: 4,
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>

        {/* TODO: fix color */}
        <Typography variant="h4">{total}</Typography>
      </Stack>

      <Chart series={series.series} options={chartOptions} width="100%" height={200} />
    </Card>
  );
}

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  sx: PropTypes.object,
  title: PropTypes.string,
  total: PropTypes.number,
};
