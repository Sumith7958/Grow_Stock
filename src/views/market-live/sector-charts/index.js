import React from 'react';
import {  Typography, Grid} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import ChartBox from './chartbox'
import data from './stock_data'

const SectorPerformance = () => {

  return (
    
    <MainCard >
      <MainCard>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid align="left" sx={{ padding: 0 }}>
              <Typography variant="h2" >Sector Historical Charts</Typography>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
      <MainCard>
        <Grid container spacing={3}>
          {data.map((stock, index) => (
            <Grid item xs={6} key={index}> <ChartBox data={stock} /></Grid>
          ))}
        </Grid>
      </MainCard>
    </MainCard>
  );
};

export default SectorPerformance;
