import { Grid, Typography} from '@mui/material';

import { useEffect,useState } from 'react';
import axios from 'axios';

//import { gridSpacing } from 'store/constant';
import Table from './table'
import MainCard from 'ui-component/cards/MainCard';
import dataa from './data'

const Index = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [rows, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('/gainlose');  // Assumes backend is running on the same host
              
              if (response.data && response.data.length > 0) {
                  setData(response.data);
              } else {
                  setData(dataa);
              }
              
          } catch (error) {
              setData(dataa);
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);
  console.log(rows)
  return (
    <MainCard >
      <MainCard>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item align="left" sx={{ padding: 0 }}>
            <Typography variant="h2" >Top Gainers / Losers</Typography>
          </Grid>
        </Grid>  
      </MainCard>
      <MainCard>
        <Table isLoading={isLoading} data={rows}/>
      </MainCard> 
    </MainCard>
  );
};

export default Index;