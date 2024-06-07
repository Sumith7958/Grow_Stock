import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {  Typography, Grid} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import BarChart2 from './chart2'
import Table from './table'
import TableNeg from './table_neg'

const SectorPerformance = () => {

  const [dataset, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('/index_contribution');  // Assumes backend is running on the same host
              setData(response.data);
              
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);

  console.log(dataset)

  const Pos_Contr = dataset['gain']
  const Neg_Contr = dataset['lose']
  const pos=dataset['gain_val']
  const neg=dataset['neg_val']
  console.log(Pos_Contr,Neg_Contr)

  // // Combine positive and negative contributions
  //const allContributions = [...Pos_Contr,...Neg_Contr];

  // // Extract names and contributions
  // const names = allContributions.map(item => item.Name);
  // const contributions = allContributions.map(item => item.Contribution);

  return (
    
    <MainCard >
      <MainCard>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Grid align="left" sx={{ padding: 0 }}>
              <Typography variant="h2" >NIFTY 50 Index Contribution</Typography>
            </Grid>
          </Grid>
        </Grid>
      </MainCard>
      {/* <BarChart data={data}/> */}
      <MainCard>
        <Grid container spacing={0}>
          <Grid item xs={6} sx={{p:1}} ><Table data={Pos_Contr} value={pos} name='Positive contributions'/></Grid>
          <Grid item xs={6} sx={{p:1}} ><TableNeg data={Neg_Contr} value ={neg} name='Negative contributions'/></Grid>
          {/* <Grid item xs={12} ><BarChart2 names={names} value={values}/></Grid> */}
          <Grid item xs={12} ><BarChart2 /></Grid>
          
        </Grid>
      </MainCard>
      
    </MainCard>
  );
};

export default SectorPerformance;