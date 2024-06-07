import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    type: 'area',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    strokeDashArray: 0
  }
};

// const stockData = {
//   today: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 78],
//   week: [200, 250, 220, 180, 210, 230, 240],
//   month: [850, 900, 950, 920, 880, 920, 940, 980, 960, 950, 930, 910]
// };

// ==============================|| INCOME AREA CHART ||============================== //

const IndexChart = ({ slot ,data}) => {
  const stockData=data

  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);
  const [series, setSeries] = useState([
    {
      name: '',
      data: []
    }
  ]);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: [theme.palette.secondary.main],
      xaxis: {
        categories: getCategories(slot),
        labels: {
          style: {
            colors: [
              secondary,
            ]
          }
        },
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: getTickAmount(slot)
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'light'
      }
    }));
  }, [primary, secondary, line, theme, slot]);

  const getCategories = (slot) => {
    switch (slot) {
      case '1w_close':
        return stockData["1w_date"]
      case '1m_close':
        return stockData["1m_date"]
      case '6m_close':
        return stockData["6m_date"]
      case '1y_close':
        return stockData["1y_date"]
      case '3y_close':
        return stockData["3y_date"]
      case '5y_close':
        return stockData["5y_date"]
      default:
        return ;
    }
  };

  const getTickAmount = (slot) => {
    switch (slot) {
      case '1w_close':
        return 7
      case '1m_close':
        return 15
      default:
        return 30 ;
    }
  };
  useEffect(() => {
    if (slot) {
      setSeries([
        {
          name: '',
          data: stockData[slot]
        }
      ]);
    }
  }, [slot]);

  useEffect(() => {
    setSeries([
      {
        name: '',
        data: stockData[slot]
      }
    ]);
  }, [slot]);

  return <ReactApexChart options={options} series={series} type="area" height={400} />;
};

IndexChart.propTypes = {
  slot: PropTypes.oneOf(['day', 'week', 'month']).isRequired
};

export default IndexChart;

