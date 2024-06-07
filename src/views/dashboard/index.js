import { useEffect, useState } from 'react';
import axios from 'axios';
// material-ui
import { Grid } from '@mui/material';
import IndexBox from './IndexBox';
import BarChart from './BarChart';
import { gridSpacing } from 'store/constant';
import IndexTableChart from './chartandtable/IndexTableChart';
import Heatmap from './Heatmap';
import PopCard from './Dashboardtable';
import total_data from './data.json'

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('/dashboard');  // Assumes backend is running on the same host
              setData(response.data);
              
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      fetchData();
  }, []);
  const index_box = total_data['index_data']
  const chart_table = data['chart_table']
  const chart_data = data['chart_data']
  const top_gain = data['top_gainers']
  const top_lose = data['top_losers']
  const heat_map = data['heat_map']
  
  console.log(data)
  //console.log(total_data['index_data']); 
  // const bar_chart = data['bar']; 
  // if (bar_chart) {
  //     console.log(bar_chart); 
  // }
  // "index_data": [
  //   {
  //     "Name": "NIFTY50",
  //     "Symbol": "^NSEI",
  //     "Close": 22604.849609375,
  //     "High": 22783.349609375,
  //     "Low": 22568.400390625,
  //     "change": -38.55078125,
  //     "percent": -0.170251731563962
  //   },
  //   {
  //     "Name": "SENSEX",
  //     "Symbol": "^BSESN",
  //     "Close": 74482.78125,
  //     "High": 75111.390625,
  //     "Low": 74346.3984375,
  //     "change": -188.5,
  //     "percent": -0.25243975574612226
  //   },
  //   {
  //     "Name": "BANK-NIFTY",
  //     "Symbol": "^NSEBANK",
  //     "Close": 49396.75,
  //     "High": 49974.75,
  //     "Low": 49249.8984375,
  //     "change": -27.30078125,
  //     "percent": -0.05523784638946894
  //   }
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {index_box && index_box.map((item, index) => (
            <Grid key={index} item lg={3} md={6} sm={6} xs={12}>
              <IndexBox isLoading={isLoading} data={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <IndexTableChart chart_table = {chart_table} chart_data = {chart_data} />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item md={6} sm={12} xs={12}>
            <PopCard title={'TOP GAINERS'} isLoading={isLoading} table_data={top_gain}   />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <PopCard title={'TOP LOSERS'} isLoading={isLoading} table_data={top_lose} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={6}>
            <BarChart isLoading={isLoading}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Heatmap isLoading={isLoading} heat_data={heat_map} />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
