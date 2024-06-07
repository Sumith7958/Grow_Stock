import { useState } from 'react';
import { Grid, Typography, Stack, Button, Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import IndicatorBox from './indicators_box';
import IndicatorTime from './indicator_table';
import IndicatorBar from './indicator_bar';
import Skull from './load'

// const data = {
//   "bar":{

//   },
//   "1_min": {
//     "table": [
//         {"Name":"Relative Strength Index (14)","Value":"37.05","Action":"Neutral"},
//         {"Name":"Stochastic %K (14, 3, 3)","Value":"46.93","Action":"Neutral"},
//         {"Name":"Commodity Channel Index (20)","Value":"−56.14","Action":"Neutral"},
//         {"Name":"Average Directional Index (14)","Value":"24.35","Action":"Sell"},
//         {"Name":"Awesome Oscillator","Value":"8.39","Action":"Neutral"},
//         {"Name":"Momentum (10)","Value":"−6.00","Action":"Sell"},
//         {"Name":"MACD Level (12, 26)","Value":"1.48","Action":"Sell"},
//         {"Name":"Stochastic RSI Fast (3, 3, 14, 14)","Value":"43.76","Action":"Neutral"},
//         {"Name":"Williams Percent Range (14)","Value":"−100.00","Action":"Neutral"},
//         {"Name":"Bull Bear Power","Value":"−8.30","Action":"Neutral"},
//         {"Name":"Ultimate Oscillator (7, 14, 28)","Value":"46.21","Action":"Neutral"}
//     ],
//     "series": [10,20,8],
//     "pivot":[
//       {
//         "Pivot": "S3",
//         "Classic": 5856.13,
//         "Fibonacci": 5897.63,
//         "Camarilla": 5928.49,
//         "Woodie": 5881.9,
//         "DM": "—"
//       },
//       {
//         "Pivot": "S2",
//         "Classic": 5897.63,
//         "Fibonacci": 5913.49,
//         "Camarilla": 5932.29,
//         "Woodie": 5899.95,
//         "DM": "—"
//       },
//       {
//         "Pivot": "S1",
//         "Classic": 5918.77,
//         "Fibonacci": 5923.28,
//         "Camarilla": 5936.1,
//         "Woodie": 5923.4,
//         "DM": "5908.20"
//       },
//       {
//         "Pivot": "P",
//         "Classic": 5939.13,
//         "Fibonacci": 5939.13,
//         "Camarilla": 5939.13,
//         "Woodie": 5941.45,
//         "DM": "5933.85"
//       },
//       {
//         "Pivot": "R1",
//         "Classic": 5960.27,
//         "Fibonacci": 5954.99,
//         "Camarilla": 5943.7,
//         "Woodie": 5964.9,
//         "DM": "5949.70"
//       },
//       {
//         "Pivot": "R2",
//         "Classic": 5980.63,
//         "Fibonacci": 5964.78,
//         "Camarilla": 5947.51,
//         "Woodie": 5982.95,
//         "DM": "—"
//       },
//       {
//         "Pivot": "R3",
//         "Classic": 6022.13,
//         "Fibonacci": 5980.63,
//         "Camarilla": 5951.31,
//         "Woodie": 6006.4,
//         "DM": "—"
//       }
//      ]
//   },
//   "5_min": {
//     "table": [
//       {
//         "Name": "ADX(14)",
//         "Value": 27.805,
//         "Action": "Sell"
//       },
//       {
//         "Name": "CCI(14)",
//         "Value": -155.8097,
//         "Action": "Sell"
//       },
//       {
//         "Name": "RSI(14)",
//         "Value": 44.58,
//         "Action": "Sell"
//       },
//       {
//         "Name": "STOCH(9,6)",
//         "Value": 38.37,
//         "Action": "Sell"
//       }
//     ],
//     "series": [20,10,8],
//     "pivot":[
//       {
//         "Name": "Fibonacci",
//         "S3": 1508.01,
//         "S2": 1509.43,
//         "S1": 1510.84,
//         "Pivot": 1514.55,
//         "R1": 1513.66,
//         "R2": 1515.07,
//         "R3": 1516.49
//       },
//       {
//         "Name": "Camarilla",
//         "S3": 1499.15,
//         "S2": 1505.03,
//         "S1": 1508.67,
//         "Pivot": 1514.55,
//         "R1": 1520.43,
//         "R2": 1524.07,
//         "R3": 1529.95
//       },
//       {
//         "Name": "Woodie's",
//         "S3": 1489.16,
//         "S2": 1498.58,
//         "S1": 1504.56,
//         "Pivot": 1513.98,
//         "R1": 1519.96,
//         "R2": 1529.38,
//         "R3": 1535.36
//       },
//       {
//         "Name": "Classic",
//         "S3": 1490.3,
//         "S2": 1499.15,
//         "S1": 1505.7,
//         "Pivot": 1514.55,
//         "R1": 1521.1,
//         "R2": 1529.95,
//         "R3": 1536.5
//       }
//     ]
//   }
// };





const Indicator = ({datastock}) => {
  console.log(datastock)
  //const [slot, setSlot] = useState('hour');

  const buttons = [
  
    { label: '5 Minutes', value: 'min5', data: datastock["min_5"]  },
    { label: '30 Minutes', value: 'min30', data: datastock["min_30"]  },
    { label: 'Hourly', value: 'hour', data: datastock["hour4"]  },
    { label: '6 Hour', value: 'hour6', data: datastock["min_5"]  },
    { label: 'Daily', value: 'today', data: datastock["min_30"]  },
    { label: 'Weekly', value: 'week', data: datastock["hour4"] },
    { label: 'Monthly', value: 'month', data: datastock["min_5"] },
  ];

  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2500);

  const [slot, setSlot] = useState('hour');
  const [data, setRows] = useState(buttons[4].data); // Initial rows data

  // Function to handle button click
  const handleButtonClick = (buttonValue, buttonData) => {
    setSlot(buttonValue); // Update selected button value
    setRows(buttonData); // Update rows data
  };
  return (
    <div>
    {loading ? (
      <Skull />
    ) : (
      <Grid container spacing={2} >
        <Grid item xs={12}>
          <MainCard>
            <Typography sx={{ fontSize: '2rem', fontWeight: 500 }}>{datastock.daydata.name}</Typography>
          </MainCard>
        </Grid>
        <Grid item xs={12} >
          <IndicatorBar data={datastock.bar}/>
        </Grid>
        <Grid item xs={12} >
          <MainCard>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white'
            }}>
              <Grid  sx={{py:4}} >
                <Stack direction="row" alignItems="center" spacing={2}>
                  {buttons.map((button) => (
                    <Button
                      key={button.value}
                      size="medium"
                      // onClick={() => setSlot(button.value)}
                      onClick={() => handleButtonClick(button.value, button.data)}
                      color={slot === button.value ? 'primary' : 'secondary'}
                      variant={slot === button.value ? 'contained' : 'outlined'}
                    >
                      {button.label}
                    </Button>
                  ))}
                  
                </Stack>
              </Grid>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <IndicatorBox data={data.oscillator} />
              </Grid>
              <Grid item xs={6}>
                <IndicatorBox data={data.Moving} />
              </Grid>
              <Grid item xs={12}>
                <IndicatorTime data={data["pivottable"]}/>
              </Grid>
            </Grid> 
          </MainCard>
        </Grid>
      </Grid>
    )}
    </div>
  );
};

export default Indicator;