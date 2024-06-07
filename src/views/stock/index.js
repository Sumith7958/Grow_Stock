import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import NameCard from './Namecard';
import StockChart from './stockchart/StockChart';
import BarTable from './bartable/BarTable'
import HorizontalBar from './HorizontalBar';
import jsondata from './data2.json';
import PieChart from './pie_share';
//import data from './data2.json'


// ==============================|| DEFAULT DASHBOARD ||============================== //
const returndata=[
	{
    "data":[20,30,50]
	}
];
console.log(jsondata)

const Dashboard = ({stock}) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  console.log(stock)

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <NameCard isLoading={isLoading} data={stock.fundamentals} daydata={stock.daydata}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <StockChart data={stock.data}/>
      </Grid>
      <Grid item xs={12}>
        <BarTable tableData={stock.quarter_results} title='Quarterly results' data={['Sales','Net Profit']} />
      </Grid>
      <Grid item xs={12}>
        <BarTable tableData={stock.profit_loss} title='Profit Loss' data={['Sales','Net Profit']}/>
      </Grid>
      <Grid item xs={12}>
        <BarTable tableData={stock.balance_sheet} title='Balance sheet' data={['Total Liabilities','Reserves']}/>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <HorizontalBar jsondata={returndata} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <HorizontalBar jsondata={returndata} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <HorizontalBar jsondata={returndata} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <HorizontalBar jsondata={returndata} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} >
        <PieChart data={stock.shareholdings}/>
      </Grid>
      
    </Grid>
  );
};

export default Dashboard;