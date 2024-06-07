import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
import { Stack, Button, CardContent } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import IndexChart from './IndexChart';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const StockChart = ({ isLoading,data }) => {
  //const theme = useTheme();
  const [slot, setSlot] = useState('1y_close');
  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <Grid xs={12} md={12} sx={{ p: 1 }}>
            <CardContent>
              <Grid container>
                <Stack direction="row" alignItems="center" spacing={0}>
                      <Button
                        size='1px'
                        onClick={() => setSlot('1w_close')}
                        color={slot === '1w_close' ? 'primary' : 'secondary'}
                        variant={slot === '1w_close' ? 'outlined' : 'text'}
                      >
                        1 Week
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('1m_close')}
                        color={slot === '1m_close' ? 'primary' : 'secondary'}
                        variant={slot === '1m_close' ? 'outlined' : 'text'}
                      >
                        1M
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('6m_close')}
                        color={slot === '6m_close' ? 'primary' : 'secondary'}
                        variant={slot === '6m_close' ? 'outlined' : 'text'}
                      >
                        6M
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('1y_close')}
                        color={slot === '1y_close' ? 'primary' : 'secondary'}
                        variant={slot === '1y_close' ? 'outlined' : 'text'}
                      >
                        1Y
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('3y_close')}
                        color={slot === '3y_close' ? 'primary' : 'secondary'}
                        variant={slot === '3y_close' ? 'outlined' : 'text'}
                      >
                        3Y
                      </Button>
                      <Button
                        size="small"
                        onClick={() => setSlot('5y_close')}
                        color={slot === '5y_close' ? 'primary' : 'secondary'}
                        variant={slot === '5y_close' ? 'outlined' : 'text'}
                      >
                        5Y
                      </Button>
                    </Stack>
              </Grid>
            </CardContent>
            <Grid>
              <IndexChart slot={slot} data={data}/>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

StockChart.propTypes = {
  isLoading: PropTypes.bool
};

export default StockChart;
