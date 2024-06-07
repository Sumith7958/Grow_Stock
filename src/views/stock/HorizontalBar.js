import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const HorizontalBar = () => {
  const theme = useTheme();
  const green = theme.palette.success.main;
  const red = theme.palette.error.main;
  const chartData = {
    height: 250,
    type: 'bar',
    options: {
      chart: {
        id: 'bar-chart',
        stacked: false,
        toolbar: {
          show: false
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: 0,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: '50%',
          borderRadius: 2,
          borderRadiusApplication: 'end',
          barHeight: '70%', 
        }
      },
      colors: [({ value }) => value > 0 ? green : red],
      xaxis: {
        type: 'category',
        categories: ['2019', '2020', '2021', '2022','2023'],
      },
      
      dataLabels: {
        enabled: true,
        offsetX: 2,
        position: 'top',
        style: {
          colors: ['#000'], // Set the color of the data labels to black
        }
      },
      grid: {
        show: false
      }
    },
    series: [
      {
        name: 'change',
        data: [2,3,2,5,4]
      }
    ] 
  };

  return (
    
    <MainCard>
      <Typography>P/E Ratio</Typography>  
      <Chart {...chartData}  />
    </MainCard>

  );
};

export default HorizontalBar;