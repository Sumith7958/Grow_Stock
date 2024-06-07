import React from 'react';
import Chart from 'react-apexcharts';
import { Grid} from '@mui/material';
//import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';


const GaugeMeter = ({data}) => {
  const stackchart={
    type: 'bar',
    height: 400,
            
    series: [{
      name: 'Buy',
      data: data.buy
    }, {
      name: 'Neutral',
      data: data.neutral
    }, {
      name: 'Sell',
      data: data.sell
    }],
    options: {
      colors: ['#00C100','#DBDFAC','#C80000'],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: 'Overview'
      },
      xaxis: {
        categories: ['5 Minutes', '15 Minutes', '30 Minutes','45 Minute',  '1 Hour', '6 Hours', '1 Day'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val 
          }
        }
      },
      fill: {
        opacity: 1
      
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    },
  
  
  };
  return (
    <MainCard>
        <Grid xs={12}> 
            <Chart {...stackchart} />
        </Grid>
    </MainCard>
  );
};

export default GaugeMeter;
