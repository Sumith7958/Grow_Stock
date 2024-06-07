import PropTypes from 'prop-types';
//import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Typography ,Link,Divider,Button} from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.grey[900],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.grey[900],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));
const rows= 
  {
    "Close": 22604,
    "High": 22783,
    "Low": 22568,
    "Name": "NIFTY50",
    "Symbol": "^NSEI",
    "change": -38,
    "percent": -0.17
  }
const BoxCard = ({ isLoading, data }) => {
  const theme = useTheme();
  if (!data || data.length === 0) {
    data = rows; 
  }
  const close = data ? data["Close"].toLocaleString('en-US', { maximumFractionDigits: 0 }) : null;
  const high = data ? data["High"].toLocaleString('en-US', { maximumFractionDigits: 0 }) : null;
  const low = data ? data["Low"].toLocaleString('en-US', { maximumFractionDigits: 0 }): null;
  const name= data ? data['Name'] :null;
  const symbol= data ? data['symbol'] :null;
  const change= data ? data['percent'].toLocaleString('en-US',{ maximumFractionDigits: 1 }):null;


  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2 }}>
            <Grid container spacing={0.5} alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography
                component={Link}
                href={`stock/${symbol}`}

                sx={{
                  fontSize: '1.05rem',
                  fontWeight: 400,
                  color: theme.palette.primary[500],
                  my: 0
                }}   
                >
                  {name}
                </Typography>
              </Grid>
              
            </Grid>
            <Grid item sx={{ marginTop: 0}} />
            <Grid container spacing={1} sx={{pt:1}}>
              <Grid item >
                <Typography sx={{fontSize: '0.9rem',fontWeight: 450,color: theme.palette.primary[500]}}>₹{close}</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontSize: '0.9rem',fontWeight: 400,color: change > 0 ? theme.palette.success.dark : theme.palette.error.dark}}>({change}%) </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0.5} alignItems="center" justifyContent="space-between" sx={{ pt: 0 }}>
              <Grid item >
                <Typography sx={{fontSize: '0.9rem',fontWeight: 400,color: theme.palette.primary[500], pt:1}}>High</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontSize: '0.9rem',fontWeight: 400,color: theme.palette.primary[500], pt:1}}>Low</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0.5} alignItems="center" justifyContent="space-between" sx={{ pb: 1 }} >
              <Grid item>
                <Typography sx={{fontSize: '0.9rem',fontWeight: 450,color: theme.palette.success.dark, pt:0}}>{high}</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontSize: '0.9rem',fontWeight: 450,color: theme.palette.error.dark, pt:0}}>{low}</Typography>
              </Grid>
            </Grid>
            
            <Grid container spacing={1} alignItems="center" justifyContent="space-between" sx={{ pt: 1 }} >
              <Grid item xs={6}>
                <Button size="small" variant="contained" fullWidth component={Link} href={`strategy/indicator/${symbol}`}>Indicator</Button>
              </Grid>
              <Grid item xs={6}>
                <Button size="small" variant="contained" fullWidth component={Link} href={`strategy/model/${symbol}`}>Model</Button>
              </Grid>
            </Grid>
            
          </Box>
        </CardWrapper>
      )}
      <Divider/>
    </>
  );
};

BoxCard.propTypes = {
  isLoading: PropTypes.bool
};

export default BoxCard;