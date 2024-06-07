import PropTypes from 'prop-types';
//import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {  Button, CardActions, CardContent, Grid, Typography,Paper,Link } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
//import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
//import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
//import { Title } from '@mui/icons-material';
//import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const PopularCard = ({  title, isLoading , table_data }) => {
  const theme = useTheme();


  if (!table_data || table_data.length === 0) {
    table_data = [
      {
        "Name": "Bajaj Finery",
        "Close": "1,234",
        "percent": 0.34,
        "change":23
      },
      {
        "Name": "HDFC Bank",
        "Close": "2,134",
        "percent": -0.2,
        "change":-43
      },
      {
        "Name": "Alpha Logic",
        "Close": "834",
        "percent": 0.1,
        "change":5
      },
      {
        "Name": "Vodafone ",
        "Close": "954",
        "percent": 1.23,
        "change":100
      },
      {
        "Name": "Yes BANK",
        "Close": "486",
        "percent": -0.67,
        "change":-23
      },
      {
        "Name": "Vodafone ",
        "Close": "954",
        "percent": 3,
        "change":23
      }
    ] 
  }

  return (
    
    
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12}>
                <Grid container alignContent="center" justifyContent="space-between">
                  <Grid item>
                    <Typography variant="h3">{title}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" >Company Name</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Percent</TableCell>
                      <TableCell align="right">Change</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {table_data.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          <Typography sx={{fontSize: '1rem',fontWeight: 450,color: theme.palette.primary[500],py:0.6}}>{row.Name}</Typography> </TableCell>
                        <TableCell align="right" sx={{fontSize: '1rem',fontWeight: 450,color: theme.palette.primary[500],py:0.6}}>₹{row.Close.toLocaleString('en-US', { maximumFractionDigits: 0 })}</TableCell>
                        <TableCell align="right" sx={{fontSize: '1rem',fontWeight: 450,color: row.percent > 0 ? 'green' : 'red',py:0.6}}>{row.percent.toLocaleString('en-US', { maximumFractionDigits: 2 })}%</TableCell>
                        <TableCell align="right" sx={{fontSize: '1rem',fontWeight: 450,color: row.change > 0 ? 'green' : 'red',py:0.6}}>₹{row.change.toLocaleString('en-US', { maximumFractionDigits: 1 })}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </Grid>
            </Grid> 
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="small" disableElevation component={Link}
                href="market/top-gainers-losers">
              View All
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

PopularCard.propTypes = {
  isLoading: PropTypes.bool
};

export default PopularCard;