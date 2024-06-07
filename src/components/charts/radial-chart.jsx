import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, useTheme } from '@mui/material/styles';

import { applyBrlMask } from 'src/utils/format-number';

import Chart, { useChart } from 'src/components/chart';

const CHART_HEIGHT = 422;
const LEGEND_HEIGHT = 72;
const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

export default function RadialChart({ title, subheader, chart }) {
  const theme = useTheme();

  const { series, labels, height, type } = chart;

  const chartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    labels,
    stroke: {
      colors: [theme.palette.background.paper],
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        formatter: (value) => `R$ ${applyBrlMask(value)}`,
        title: {
          formatter: (seriesName) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '16px',
          },
          value: {
            fontSize: '18px',
          },
          total: {
            show: false,
            label: 'Total',
            formatter: (w) => w,
          },
        },
      },
    },
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <StyledChart
        type={type}
        series={series}
        options={chartOptions}
        width="100%"
        height={height || 280}
      />
    </Card>
  );
}

RadialChart.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
