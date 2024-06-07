import Chart from 'react-apexcharts';
//import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Typography,Grid,Card } from '@mui/material';

const Bar = ()=>{
//const Bar = () => {
  const [dataset, setData] = useState([]);
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('/barstock');  // Assumes backend is running on the same host
              setData(response.data);
              
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  console.log(dataset)
  const sortedData = Object.entries(dataset)
    .sort((a, b) => b[1] - a[1]);

  const names = sortedData.map(([key,]) => key);
  const value = sortedData.map(([,value]) => value);
  console.log(names,value)

  const chartData={
    type: 'bar',
    height: 1200,
            
    series: [{
      name: '',
      data:value
      //data: [4.5, 4.3, 4.2, 4.2, 4.1, 4.1, 4, 3.9, 3.9, 3.8, 3.5, 3, 2.9, 2.1, 1.5, 1.1, 1, 0.88, 0.76, 0.65, 0.4, -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4, -4.1, -4.1, -4.22, -4.3, -4.4]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 440,
        stacked: true,
        id: 'support-chart',
        // sparkline: {
        //   enabled: true
        // }
      },
      // colors: ['#00C853', '#F44336'],
      colors: [({ value }) => value > 0 ?  '#00C853':'#F44336'],
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusApplication: 'end', // 'around', 'end'
          borderRadiusWhenStacked: 'all', // 'all', 'last'
          horizontal: true,
          barHeight: '90%',
          dataLabels: {
            position: 'top',
            
          },
          
        },
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#000'], // Set the color of the data labels to black
        },
        offsetX: 10,
        // formatter: function(val, opt) {
        //   return opt.w.globals.labels[opt.dataPointIndex] + ": " + val;
        // }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      
      yaxis: {
        stepSize: 5
      },
      tooltip: {
        shared: false,
      },
      xaxis: {
        categories:names
  
      },
    },
  
  };
  return (    
    <Grid>
      <Card >
          <Grid container sx={{ p: 2, color: '#fff' }}>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h2" >Contributors</Typography>
            </Grid>
          </Grid>
        </Card>
      <Chart {...chartData}  />
    </Grid>
  );
};

export default Bar;