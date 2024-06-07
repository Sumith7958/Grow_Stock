import PropTypes from 'prop-types';
import { Grid, Typography, Card, Box,Avatar} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useTheme } from '@mui/material/styles';

const ColorBox = ({ data }) => (
  
  <>
    <Card sx={{ mb: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 1,
          bgcolor: 'secondary.light',
          color: 'grey.800'
        }}
      >
        <Grid container direction={'column'} sx={{ p: 2 }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h4" color="inherit">
                {data.label} :
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" color="inherit">
                {data.value}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* {!title && <Box sx={{ p: 1.15 }} />} */}
      </Box>
    </Card>
  </>
);

ColorBox.propTypes = {
  // bgcolor: PropTypes.string,
  // title: PropTypes.string,
  data: PropTypes.object.isRequired,
  // dark: PropTypes.bool
};

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading, data,daydata }) => {
  
  console.log(data)
  const theme = useTheme();
  const num=daydata.change

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <MainCard>
          <Grid>
            <Grid container direction="column">
              {/* <Grid item>
                <Grid container alignItems="center">
                  <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>HDFC BANK</Typography>
                </Grid>
              </Grid> */}
              <Grid container sx={{ p: 2, pb: 2, color: '#fff' }}>
                <Grid item xs={12}>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Grid container spacing={0.5}>
                        <Grid item>
                          <Typography variant="h5" sx={{ color: theme.palette.grey[800],fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75  }}>{daydata.name}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h4" sx={{ color: num > 0 ? theme.palette.success.dark : theme.palette.error.dark,fontSize: '1.5rem', fontWeight: 500, mr: 1, mt: 2.5,mb: 0.75  }}>({daydata.change}%) </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Grid container>
                        <Grid item>
                          <Typography variant="h5" sx={{ color: num > 0 ? theme.palette.success.dark : theme.palette.error.dark,fontSize: '1.5rem', fontWeight: 500, mr: 1, mt: 2.75, mb: 0.75  }}>
                            {daydata.price}.00
                          </Typography>
                        </Grid>
                        <Grid item>
                        {num>0 ? (
                          <Avatar
                          variant="rounded"
                          sx={{
                            width: 23,
                            height: 23,
                            borderRadius: '5px',
                            backgroundColor: theme.palette.success.light,
                            color: theme.palette.success.dark,
                            ml: 0.5,
                            mt:3.2
                          }}
                        >
                          <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                        </Avatar>
                        ) : (
                          <Avatar
                          variant="rounded"
                          sx={{
                            width: 23,
                            height: 23,
                            borderRadius: '5px',
                            backgroundColor: theme.palette.orange.light,
                            color: theme.palette.orange.dark,
                            ml: 0.5,
                            mt:3.2
                          }}
                        >
                          <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                        </Avatar>
                        )}
                          {/* <Avatar
                            variant="rounded"
                            sx={{
                              width: 23,
                              height: 23,
                              borderRadius: '5px',
                              backgroundColor: theme.palette.success.light,
                              color: theme.palette.success.dark,
                              ml: 0.5,
                              mt:3.2
                            }}
                          >
                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                          </Avatar> */}
                        </Grid>
                        {/* <Grid item sx={{marginLeft: 0.5}}>
                          <Typography variant="h5" sx={{ color: theme.palette.orange.dark }}>
                            ₹1839.00
                          </Typography>
                        </Grid>
                        <Grid item>
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
                        </Grid> */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <SubCard>
                <Grid container spacing={2}>
                  {Object.entries(data).map(([label, value], index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                      <ColorBox data={{ label, value }} />
                    </Grid>
                  ))}
                </Grid>
              </SubCard>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool
};

export default EarningCard;
