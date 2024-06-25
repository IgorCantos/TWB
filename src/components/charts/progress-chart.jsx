import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Chart, { useChart } from 'src/components/chart';
import { useTheme } from '@mui/material/styles';

export default function ProgressChart({ title, subheader, chart }) {
  const theme = useTheme();
  const { series: serie, height, type } = chart;

  const chartOptions = useChart({
    chart: {
      type: 'bar',
      stacked: false,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '100%',
      },
    },
    stroke: {
      width: 0,
    },
    grid: {
      show: true,
      borderColor: false,
      row: {
        colors: [theme.palette.grey[600]],
        opacity: 0.2,
      },
    },
    title: {
      floating: false,
      text: serie.name,
    },
    subtitle: {
      floating: true,
      align: 'right',
      offsetY: 0,
      text: `${serie.data}%`,
      style: {
        fontSize: '16px',
      },
    },
    tooltip: {
      enabled: true,
      y: {
        show: true,
        format: 'dd MMM',
        formatter: (a) => `${a}%`,
      },
    },
    xaxis: {
      categories: [serie.name],
    },
    yaxis: {
      max: 100,
    },
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />
      <Chart
        type={type}
        series={[serie]}
        options={chartOptions}
        width="100%"
        height={height || 280}
      />
    </Card>
  );
}

ProgressChart.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
