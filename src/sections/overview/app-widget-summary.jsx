import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chart, { useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {

  const series = {
    labels: [
      '01/01/2024',
      '04/01/2024',
      '07/01/2024',
      '10/01/2024',
      '12/01/2024',
    ],
    series: [
      {
        name: 'Renda',
        type: 'area',
        data: [10, 11, 11, 12, 14],
      },

    ],
  }

  const chartOptions = useChart({

    fill: {
      type: series.series.map((i) => i.fill),
    },
    labels: series.labels,
    xaxis: {
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth'
    },
    grid: {
      show: false, // Desabilitar as linhas de grade
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
    <Card
      component={Stack}
      spacing={3}
      direction="column"
      sx={{

        borderRadius: 2,
      }}
    >

      <Stack spacing={0.5} sx={{
        px: 3,
        py: 5,
      }}>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          {title}
        </Typography>

        {/* TODO: fix color */}
        <Typography variant="h4">{total}</Typography>

      </Stack>

      <Chart
        series={series.series}
        options={chartOptions}
        width="100%"
        height={200}
      />
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
