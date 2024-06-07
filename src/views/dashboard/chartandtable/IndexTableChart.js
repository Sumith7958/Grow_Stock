import PropTypes from 'prop-types';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { Typography, CardContent } from '@mui/material';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import IndexChart from './IndexChart';
import IndexTable from './IndexTable';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const IndexTableChart = ({ isLoading , chart_table, chart_data}) => {
  //const theme = useTheme();
  if (!chart_table || chart_table=== 0) {
    chart_table = [
      {
        "Name": "NIFTY50",
        "Close": "22,567",
        "percent": 40
      },
      {
        "Name": "SENSEX",
        "Close": "78,987",
        "percent": 300
      },
      {
        "Name": "BANK-NIFTY",
        "Close": "45,367",
        "percent": -355
      },
      {
        "Name": "NIFTY-FINANCE",
        "Close": "65,878",
        "percent": 50
      },
      {
        "Name": "NIFTY-IT",
        "Close": "12,879",
        "percent": 100
      },
      {
        "Name": "NIFTY-ENERGY",
        "Close": "65,878",
        "percent": -50
      }
    ]
  }

  if (!chart_data || chart_data=== 0) {
    chart_data={
      'time': ['09:15', '09:20', '09:25', '09:30', '09:35', '09:40', '09:45', '09:50', '09:55', '10:00', '10:05', '10:10', '10:15', '10:20', '10:25', '10:30', '10:35', '10:40', '10:45', '10:50', '10:55', '11:00', '11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35', '11:40', '11:45', '11:50', '11:55', '12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50', '12:55', '13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55', '14:00', '14:05', '14:10', '14:15', '14:20', '14:25', '14:30', '14:35', '14:40', '14:45', '14:50', '14:55', '15:00', '15:05', '15:10', '15:15', '15:20', '15:25'], 
      'NIFTY50': [22491, 22498, 22511, 22515, 22501, 22488, 22460, 22454, 22454, 22465, 22481, 22481, 22515, 22518, 22529, 22539, 22536, 22528, 22522, 22523, 22528, 22525, 22536, 22537, 22543, 22541, 22538, 22534, 22531, 22540, 22546, 22544, 22554, 22559, 22566, 22559, 22560, 22571, 22570, 22567, 22564, 22571, 22567, 22572, 22573, 22570, 22577, 22576, 22577, 22592, 22599, 22607, 22612, 22619, 22608, 22608, 22621, 22617, 22607, 22611, 22617, 22623, 22614, 22617, 22626, 22608, 22608, 22627, 22628, 22639, 22649, 22653, 22647, 22640, 22633], 
      'SENSEX': [74013, 74069, 74161, 74162, 74122, 74095, 74014, 73980, 73987, 74039, 74118, 74104, 74216, 74221, 74259, 74281, 74268, 74245, 74223, 74211, 74250, 74243, 74292, 74290, 74314, 74304, 74291, 74270, 74281, 74303, 74329, 74310, 74362, 74381, 74404, 74368, 74369, 74411, 74408, 74392, 74387, 74411, 74411, 74414, 74427, 74416, 74426, 74424, 74421, 74476, 74514, 74548, 74576, 74607, 74564, 74556, 74611, 74589, 74569, 74582, 74598, 74622, 74560, 74593, 74621, 74557, 74568, 74648, 74646, 74676, 74701, 74717, 74702, 74690, 74671], 
      'BANK-NIFTY': [48406, 48504, 48574, 48530, 48541, 48511, 48442, 48437, 48408, 48433, 48544, 48552, 48654, 48690, 48696, 48757, 48756, 48714, 48710, 48703, 48702, 48684, 48717, 48721, 48822, 48818, 48810, 48804, 48799, 48862, 48875, 48873, 48916, 48920, 48951, 48952, 48939, 48971, 48966, 48928, 48955, 49018, 48998, 49004, 49009, 48987, 49001, 48997, 49014, 49068, 49158, 49210, 49282, 49335, 49300, 49315, 49379, 49360, 49330, 49348, 49330, 49324, 49285, 49325, 49349, 49310, 49335, 49416, 49424, 49403, 49460, 49462, 49442, 49386, 49381], 
      'NIFTY-IT': [33744, 33734, 33677, 33697, 33687, 33650, 33624, 33579, 33595, 33592, 33576, 33563, 33606, 33572, 33599, 33588, 33578, 33566, 33587, 33598, 33604, 33658, 33657, 33648, 33610, 33615, 33616, 33599, 33625, 33618, 33630, 33626, 33629, 33611, 33620, 33628, 33621, 33650, 33640, 33645, 33616, 33610, 33620, 33620, 33643, 33677, 33662, 33632, 33636, 33624, 33615, 33611, 33623, 33605, 33592, 33581, 33588, 33602, 33586, 33581, 33587, 33575, 33571, 33575, 33579, 33540, 33547, 33533, 33548, 33577, 33576, 33590, 33584, 33580, 33571], 
      'NIFTY-FINANCE': [11030, 11027, 11025, 11028, 11023, 11017, 11012, 11017, 11018, 11016, 11022, 11022, 11021, 11021, 11026, 11025, 11024, 11023, 11026, 11027, 11025, 11023, 11027, 11023, 11024, 11023, 11022, 11027, 11027, 11024, 11028, 11031, 11037, 11036, 11036, 11037, 11041, 11040, 11039, 11042, 11042, 11038, 11034, 11034, 11035, 11037, 11038, 11033, 11032, 11031, 11030, 11031, 11030, 11031, 11031, 11036, 11041, 11037, 11035, 11040, 11045, 11042, 11039, 11043, 11028, 11030, 11032, 11036, 11034, 11040, 11041, 11042, 11047, 11043], 
      'NIFTY-ENERGY': [19082, 19110, 19091, 19095, 19126, 19118, 19077, 19073, 19071, 19051, 19061, 19057, 19071, 19081, 19099, 19103, 19111, 19095, 19082, 19076, 19066, 19064, 19069, 19065, 19067, 19078, 19079, 19092, 19091, 19079, 19076, 19071, 19091, 19098, 19078, 19081, 19072, 19082, 19089, 19088, 19084, 19084, 19080, 19079, 19084, 19099, 19130, 19135, 19148, 19144, 19123, 19117, 19098, 19092, 19096, 19102, 19098, 19108, 19088, 19066, 19048, 19073, 19047, 19035, 19036, 19011, 19016, 19028, 19038, 19077, 19098, 19103, 19106, 19109, 19099, 19099, 19122, 19117]
    }
  }
  
  
  const [selectedStock, setSelectedStock] = useState('NIFTY50');

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
  };

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <MainCard content={false}>
          <Grid container>
            <Grid xs={12} md={5}>
              <IndexTable onStockSelect={handleStockSelect} rows={chart_table} />
            </Grid>
            <Grid xs={12} md={7}>
              <CardContent>
                <Grid container>
                  <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h3">{selectedStock}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3">22,345</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <Grid>
                <IndexChart selectedStock={selectedStock} stockData={chart_data} />
              </Grid>
            </Grid>
          </Grid>
        </MainCard>
      )}
    </>
  );
};

IndexTableChart.propTypes = {
  isLoading: PropTypes.bool
};

export default IndexTableChart;

// const stockData = {
  //   'NIFTY': {
  //     'today': [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 78],
  //     'week': [200, 250, 220, 180, 210, 230, 240],
  //     'month': [850, 900, 950, 920, 880, 920, 940, 980, 960, 950, 930, 910]
  //   },
  //   'SENSEX': {
  //     'today': [80, 82, 78, 85, 89, 88, 91, 87, 90, 92, 89, 86],
  //     'week': [190, 210, 200, 220, 215, 225, 235],
  //     'month': [860, 880, 870, 900, 920, 910, 930, 950, 940, 960, 970, 980]
  //   },
  //   'BANK-NIFTY': {
  //     'today': [70, 75, 72, 77, 73, 76, 79, 80, 78, 82, 85, 83],
  //     'week': [180, 190, 185, 195, 200, 210, 205],
  //     'month': [820, 840, 830, 850, 860, 880, 870, 890, 900, 920, 910, 930]
  //   },
  //   'NIFTY-FINANCE': {
  //     'today': [85, 90, 88, 86, 82, 80, 83, 87, 89, 91, 93, 92],
  //     'week': [210, 220, 215, 230, 225, 240, 235],
  //     'month': [880, 900, 890, 910, 920, 930, 940, 950, 960, 970, 980, 990]
  //   },
  //   'NIFTY-IT': {
  //     'today': [95, 92, 100, 98, 97, 99, 96, 94, 91, 90, 93, 89],
  //     'week': [230, 225, 235, 240, 245, 250, 255],
  //     'month': [920, 930, 940, 950, 960, 970, 980, 990, 1000, 1010, 1020, 1030]
  //   },
  //   'SENSEX-MID': {
  //     'today': [83, 85, 87, 84, 82, 80, 81, 79, 86, 88, 90, 91],
  //     'week': [215, 220, 225, 230, 235, 240, 245],
  //     'month': [890, 900, 920, 910, 930, 950, 940, 960, 970, 980, 990, 1000]
  //   }
  // };