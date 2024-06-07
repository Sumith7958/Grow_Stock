import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';


// const dataset = {
//   "Alice": 25,
//   "Bob": 30,
//   "Charlie": 35,
//   "Aice": 25,
//   "ob": 30,
//   "harlie": 35
// };





const HorizontalBar = ({data,name}) => {
  
  const theme = useTheme();
  const green = theme.palette.success.main;
  const red = theme.palette.error.main;
  const chartData = {
    height: 400,
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
          barHeight: '90%', 
        }
      },
      colors: [({ value }) => value > 0 ? green : red],
      xaxis: {
        type: 'category',
        categories:name
        //categories: ['NIFTY50', 'SENSEX', 'BANK-NIFTY','NIFTY-IT','NIFTY-FINANCE','NIFTY-ENERGY','NIFTY-METAL','NIFTY-FMCG','NIFTYAUTO']
      },
      
      dataLabels: {
        enabled: true,
        offsetX: 0,
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
        data: data
        // data:values
      }
    ] 
  };

  return (
    
    <MainCard>
        <Chart {...chartData}  />
    </MainCard>

  );
};

export default HorizontalBar;

