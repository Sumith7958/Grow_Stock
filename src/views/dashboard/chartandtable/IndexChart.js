import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
  chart: {
    height: 500,
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
    width: 1
  },
  grid: {
    strokeDashArray: 1
  }
};



// ==============================|| INCOME AREA CHART ||============================== //

const IndexChart = ({ selectedStock ,stockData}) => {

  const time='time'
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
      colors: [theme.palette.primary.main, theme.palette.primary.dark],
      xaxis: {
        categories: stockData[time],
        axisBorder: {
          show: true,
          color: line
        },
        tickAmount: 9
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary]
          }
        },
        tickAmount: 8
      },
      grid: {
        borderColor: line
      },
      tooltip: {
        theme: 'light'
      }
    }));
  }, [primary, secondary, line, theme, selectedStock]);

  useEffect(() => {
    setSeries([
      {
        name: '',
        data: stockData[selectedStock]
      }
    ]);
  }, [selectedStock]);

  return <ReactApexChart options={options} series={series} type="area" height={330} />;
};

IndexChart.propTypes = {
  selectedStock: PropTypes.string.isRequired,
  stockData: PropTypes.object
};

export default IndexChart;


