
import { Grid, Typography,Card,Box} from '@mui/material';
import MuiTypography from '@mui/material/Typography';
//import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Chart from 'react-apexcharts';
import SubCard from 'ui-component/cards/SubCard';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const ColorBox = ({data }) => (
  
  <>
    <Card sx={{ mb:1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 0,
          bgcolor: 'secondary.light',
          color: 'grey.800'
        }}
      >
        <Grid container direction={'column'} sx={{ py: 3 ,px:3}}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item >
              <Typography variant="h4" color="inherit">
                {data.label} :
              </Typography>
            </Grid>
            <Grid item >
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


const IndicatorBox = ({name,para,price}) => {
  const data=price.data
  const chartData = {
    series: [{
      name: 'Stock Price',
      data: price.original
    }, {
      name: 'Predicted Price',
      data: price.predicted
    }],
    type: 'area',
    height: 340,
    options: {
      chart: {
        id: 'support-chart',
        toolbar: {
          show: false
        },
        
      },
      //colors:['#673AB7'],
      xaxis: {
        categories: [1,2,3,4,5,6,7,8,9,10,11]
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          format: 'dd/MM/yy HH:mm'
        },
        y: {
          title: 'Ticket '
        },
        marker: {
          show: false
        },
        theme: 'dark'
      }
    }
  };
  return (
    
      <Grid xs={12}>
        <SubCard>
          <Grid container sx={{pb:3}}alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h2">{name}</Typography>
            </Grid>
            {/* <Grid item>
                <Button
                  size='large'
                  style={{
                    color: 'white', // Set text color to red
                    backgroundColor: '#00C853' // Set background color to blue
                  }}
                >
                  Overall : BUY
                </Button>
            </Grid> */}
          </Grid>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={6.5}>
              <Grid container spacing={2}>
                {/* <Grid item xs={12} sm={6} md={6} >
                  <ColorBox />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                  <ColorBox />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                  <ColorBox />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                  <ColorBox />
                </Grid> */}
                {Object.entries(data).map(([label, value], index) => (
                    <Grid key={index} item xs={12} sm={6} md={6}>
                      <ColorBox data={{ label, value }} />
                    </Grid>
                  ))}
                <Grid item xs={12} >
                  <MuiTypography variant="body1" gutterBottom>
                    {para}
                  </MuiTypography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5.5}>
              <Chart {...chartData} />
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    
  );
};

export default IndicatorBox;
