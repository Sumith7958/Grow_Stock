import Chart from 'react-apexcharts';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';
import SkeletonTotalGrowthBarChart from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
//import { useState } from 'react';
//import { useEffect } from 'react';
import { Grid,Typography } from '@mui/material';
//import axios from 'axios';



const HorizontalBar = ({isLoading}) => {
  const dataset={
      'HDFC BANK': 3.29,
      'AXIS BANK': 3.00,
      'ADANI ENTERPRISES': -0.13,
      'ICICI BANK': -0.44,
      'WIPRO LTD': -0.92,
      'APOLLO HOSPITALS.': -1.86,
      'ASIAN PAINTS LTD': -1.99,
      'ADANI PORT SPECIAL': -7.55
    }

  console.log(dataset)
  if (!dataset || dataset.length === 0) {
    setData(datata);
  }
  const sortedData = Object.entries(dataset)
    .sort((a, b) => b[1] - a[1]);

  const names = sortedData.map(([key,]) => key);
  const value = sortedData.map(([,value]) => value);
  console.log(names,value)

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
          barHeight: '70%', 
        }
      },
      colors: [({ value }) => value > 0 ? green : red],
      xaxis: {
        type: 'category',
        categories: names
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
        data: value
      }
    ] 
  };

  return (
    <>
      {isLoading ? (
        <SkeletonTotalGrowthBarChart />
      ) : (
        <MainCard>
          <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h3">Sector Performance</Typography>
                  </Grid>
                </Grid>
              </Grid>
          <Chart {...chartData}  />
          
        </MainCard>
      )}
    </>
  );
};

export default HorizontalBar;
