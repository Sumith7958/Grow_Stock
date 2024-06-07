import PropTypes from 'prop-types';
//import { useState } from 'react';

// material-ui
import { Grid, Card, Box } from '@mui/material';
import { Typography, Stack, Button, CardContent } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
//import { gridSpacing } from 'store/constant';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const ColorBox = ({title, Close, percent}) => (
    
  <>
    <Card sx={{ mb: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 1,
          background: percent > 0 ? 'green' : 'red',
          color: 'grey.800' 
        }}
      >
        {title && (
          <Grid container direction={'column'} sx={{ p: 2 }}>
            <Grid item>
              <Typography color="inherit"  sx={{fontSize: '1rem',fontWeight: 600,minHeight:50}}>
                {title}
              </Typography>
            </Grid>
            <Grid item sx={{ marginTop: 1 }} />
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography color="inherit" sx={{fontSize: '1rem',fontWeight: 600}}>
                  ₹{Close.toLocaleString('en-US')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography color="inherit" sx={{fontSize: '1rem',fontWeight: 600}}>
                  {percent.toLocaleString('en-US')}%
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Box>
    </Card>
  </>
);

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object.isRequired,
  dark: PropTypes.bool
};

const Heatmap = ({ isLoading, heat_data }) => {
  //const theme = useTheme();
  //const [slot, setSlot] = useState('today');
  if (!heat_data || heat_data.length === 0) {
    heat_data = [
      {
        "Name": "HDFC Life Insurance Company",
        "Close": "1,234",
        "percent": 0.33456543
      },
      {
        "Name": "HDFC Bank",
        "Close": "2,134",
        "percent": 0.2
      },
      {
        "Name": "Alpha Logic",
        "Close": "834",
        "percent": 0.1
      },
      {
        "Name": "Yes BANK",
        "Close": "486",
        "percent": 1
      },
      {
        "Name": "Vodafone ",
        "Close": "954",
        "percent": -2
      }
    ]
  }

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard>
          <Grid container>
            <Grid xs={12} md={12}>
              <CardContent>
                <Grid container>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h3">HeatMap</Typography>
                    </Grid>
                    <Grid item>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Button
                          size="small"
                          //   onClick={() => setSlot('today')}
                          style={{
                            color: 'white', // Set text color to red
                            backgroundColor: '#00C853' // Set background color to blue
                          }}
                        >
                          Above +5%
                        </Button>
                        <Button
                          size="small"
                          style={{
                            color: 'white', // Set text color to red
                            backgroundColor: '#69F0AE' // Set background color to blue
                          }}
                        >
                          +2% to +5%
                        </Button>
                        <Button
                          size="small"
                          style={{
                            color: 'white', // Set text color to red
                            backgroundColor: '#B9F6CA' // Set background color to blue
                          }}
                        >
                          0 to 2%
                        </Button>
                        <Button
                          size="small"
                          style={{
                            color: 'white', // Set text color to red
                            backgroundColor: '#EF9A9A' // Set background color to blue
                          }}
                        >
                          0
                        </Button>
                        <Button
                          size="small"
                          style={{
                            color: 'white', // Set text color to red
                            backgroundColor: '#F44336' // Set background color to blue
                          }}
                        >
                          -2% to 0%
                        </Button>
                        <Button
                          size="small"
                          style={{
                            color: 'white', // Set text color to red
                            backgroundColor: '#C62828' // Set background color to blue
                          }}
                        >
                          -5% to -2%
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Grid>
                <Grid item>
                  <SubCard>
                    <Grid container spacing={1}>
                      {heat_data && heat_data.map((data) => {
                        return ( 
                          <Grid key={data.id} item xs={12} sm={6} md={4} lg={2}>
                            <ColorBox title={data.Name} Close={data.Close} percent={data.percent}  />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </SubCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

Heatmap.propTypes = {
  isLoading: PropTypes.bool
};

export default Heatmap;
