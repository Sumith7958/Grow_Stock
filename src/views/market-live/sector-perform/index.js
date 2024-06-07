import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {  Typography, Button,Grid, Stack } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import BarChart from './chart'


const SectorPerformance = () => {

  const [dataset, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('/barchart');  // Assumes backend is running on the same host
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

  const names = sortedData.map(([key, ]) => key);
  const values = sortedData.map(([, value]) => value);

  const datastock = {
    "7d":[1.9,1.5,1.2,1.1,0.6,0.2,0.1,-1.8,-2.1],
    "30d": [1.9,1.5,1.2,1.1,0.6,0.2,-0.5,-1.8,-1.9],
    "90d": [1.9,1.1,0.6,0.2,0.1,-0.2,-0.5,-1.8,-2.2],
    "52w": [1.9,1.1,0.6,0.2,0.1,-0.2,-0.5,-1.8,-2.2],
  };
  const namestock = {
    "7d": ['NIFTY-FINANCE','NIFTY-ENERGY','NIFTY-METAL','NIFTY-FMCG','NIFTYAUTO','NIFTY50', 'SENSEX', 'BANK-NIFTY','NIFTY-IT']
  
  };
  const buttons = [
    { label: '1D', value: '1d', data: values ,name:names },
    { label: '7D', value: '7d', data: datastock['7d']  ,name:namestock['7d'] },
    { label: '30D', value: '30d', data: datastock['30d'],name:namestock['7d'] },
    { label: '90D', value: '90d', data: datastock['90d'],name:namestock['7d'] },
    { label: '52W', value: '52w', data: datastock['7d'],name:namestock['7d'] },
    
  ];

  const [slot, setSlot] = useState('7d');
  const [data, setRows] = useState(buttons[1].data); // Initial rows data
  const [name,setname]=useState(buttons[1].name)
  // Function to handle button click
  const handleButtonClick = (buttonValue, buttonData,buttonName) => {
    setSlot(buttonValue); // Update selected button value
    setRows(buttonData); // Update rows data
    setname(buttonName);
  };

  return (
    
    <MainCard >
      <MainCard>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid align="left" sx={{ padding: 0 }}>
              <Typography variant="h2" >Sector Performance</Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Grid align="right">
              <Stack direction="row" alignItems="center" spacing={2}>
                {buttons.map((button) => (
                  <Button
                    key={button.value}
                    size="small"
                    // onClick={() => setSlot(button.value)}
                    onClick={() => handleButtonClick(button.value, button.data,button.name)}
                    color={slot === button.value ? 'primary' : 'secondary'}
                    variant={slot === button.value ? 'contained' : 'outlined'}
                  >
                    {button.label}
                  </Button>
                ))}
                
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
      <BarChart data={data} name={name}/>
      
    </MainCard>
  );
};

export default SectorPerformance;
