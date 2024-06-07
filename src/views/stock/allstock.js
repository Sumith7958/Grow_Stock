import PropTypes from 'prop-types';
//import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Typography, Avatar } from '@mui/material';
//import { Button} from '@mui/material'
//import Avatar from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
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
    background: theme.palette.primary[800],
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
    background: theme.palette.primary[800],
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

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //
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
const TotalOrderLineChartCard = ({ isLoading, data }) => {
  const theme = useTheme();
  if (!data || data.length === 0) {
    data = rows; 
  }
  const close = data ? data["Close"].toLocaleString('en-US', { maximumFractionDigits: 0 }) : null;
  const high = data ? data["High"].toLocaleString('en-US', { maximumFractionDigits: 0 }) : null;
  const low = data ? data["Low"].toLocaleString('en-US', { maximumFractionDigits: 0 }): null;
  const name= data ? data['Name'] :null;
  const change= data ? data['change'].toLocaleString('en-US',{ maximumFractionDigits: 1 }):null;
  // console.log(close)
  // console.log(high)
  // console.log(low)
  // console.log(name)
  // console.log(change)


  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container spacing={0.5} alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography
                  sx={{
                    fontSize: '1.4rem',
                    fontWeight: 450,
                    color: theme.palette.primary[500],
                    my: 2
                  }}
                >
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container spacing={0.3} >
                  <Grid item>
                    <Typography sx={{fontSize: '1rem',fontWeight: 450,color: theme.palette.primary[500]}}>0.56%</Typography>
                  </Grid>
                  <Grid item>
                  {change>0 ? (
                    <Avatar
                    variant="rounded"
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '5px',
                      backgroundColor: theme.palette.success.light,
                      color: theme.palette.success.dark,
                      ml: 0.5
                    }}
                  >
                    <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                  </Avatar>
                  ) : (
                    <Avatar
                    variant="rounded"
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: '5px',
                      backgroundColor: theme.palette.orange.light,
                      color: theme.palette.orange.dark,
                      marginLeft: 0.5
                    }}
                  >
                    <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                  </Avatar>
                  )}
                    {/* <Avatar
                      variant="rounded"
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: '5px',
                        backgroundColor: theme.palette.success.light,
                        color: theme.palette.success.dark,
                        ml: 0.5
                      }}
                    >
                      <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                    </Avatar> */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item>
                <Typography sx={{fontSize: '1.1rem',fontWeight: 450,color: theme.palette.primary[500], pt:1}}>{close}</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontSize: '1.05rem',fontWeight: 400,color: theme.palette.primary[500], pt:1}}>({change}) </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0.5} alignItems="center" justifyContent="space-between" sx={{ pt: 2.25 }}>
              <Grid item >
                <Typography sx={{fontSize: '1rem',fontWeight: 400,color: theme.palette.primary[500], pt:1}}>High</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontSize: '1rem',fontWeight: 400,color: theme.palette.primary[500], pt:1}}>Low</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={0.5} alignItems="center" justifyContent="space-between" sx={{ pt: 0 }} >
              <Grid item>
                <Typography sx={{fontSize: '1rem',fontWeight: 450,color: theme.palette.success.dark, pt:1}}>{high}</Typography>
              </Grid>
              <Grid item>
                <Typography sx={{fontSize: '1rem',fontWeight: 450,color: theme.palette.error.dark, pt:1}}>{low}</Typography>
              </Grid>
            </Grid>
            
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;