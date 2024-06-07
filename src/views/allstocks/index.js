import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import Stockbox from './box'
import data from './stockdata'

const index = ({ isLoading}) => {

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <MainCard>
          <MainCard>
            <Typography variant="h2" >All stocks</Typography>
          </MainCard>
          <MainCard>
            <Grid container spacing={1}>
              {data && data.map((data) => {
                return ( 
                  <Grid key={data.id} item xs={12} lg={3} md={6} sm={6}><Stockbox data={data}/></Grid>
                );
              })}
            </Grid>
          </MainCard>
        </MainCard>
        
      )}
    </>
  );
};

index.propTypes = {
  isLoading: PropTypes.bool
};

export default index;
