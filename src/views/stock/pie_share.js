
import { Grid, Typography} from '@mui/material';
//import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import Chart from 'react-apexcharts';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import SubCard from 'ui-component/cards/SubCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary[200],
    color: theme.palette.common.dark,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
// const data2= {
//   "categories": [
//     "Promoters",
//     "FIIs",
//     "DIIs",
//     "Government",
//     "Public",
//     "No. of Shareholders"
//   ],
//   "time_periods": [
//     "Jun 2021",
//     "Sep 2021",
//     "Dec 2021",
//     "Mar 2022",
//     "Jun 2022",
//     "Sep 2022",
//     "Dec 2022",
//     "Mar 2023",
//     "Jun 2023",
//     "Sep 2023",
//     "Dec 2023",
//     "Mar 2024"
//   ],
//   "values": {
//     "Promoters": [
//       "53.70%",
//       "53.70%",
//       "53.73%",
//       "53.77%",
//       "53.77%",
//       "54.84%",
//       "54.99%",
//       "54.99%",
//       "54.99%",
//       "54.99%",
//       "54.95%",
//       "55.06%"
//     ],
//     "FIIs": [
//       "11.82%",
//       "11.21%",
//       "10.20%",
//       "10.49%",
//       "11.16%",
//       "11.56%",
//       "11.82%",
//       "12.35%",
//       "13.67%",
//       "14.37%",
//       "14.64%",
//       "14.53%"
//     ],
//     "DIIs": [
//       "12.71%",
//       "12.85%",
//       "13.23%",
//       "13.17%",
//       "12.40%",
//       "11.53%",
//       "10.91%",
//       "10.79%",
//       "9.56%",
//       "9.03%",
//       "8.66%",
//       "8.47%"
//     ],
//     "Government": [
//       "0.00%",
//       "0.00%",
//       "0.00%",
//       "0.00%",
//       "0.00%",
//       "0.07%",
//       "0.07%",
//       "0.07%",
//       "0.07%",
//       "0.07%",
//       "0.07%",
//       "0.08%"
//     ],
//     "Public": [
//       "21.77%",
//       "22.24%",
//       "22.84%",
//       "22.57%",
//       "22.68%",
//       "21.99%",
//       "22.20%",
//       "21.79%",
//       "21.72%",
//       "21.54%",
//       "21.67%",
//       "21.88%"
//     ],
//     "No. of Shareholders": [
//       "154309",
//       "211203",
//       "244081",
//       "233225",
//       "228873",
//       "225518",
//       "226836",
//       "209076",
//       "202928",
//       "196543",
//       "200795",
//       "297605"
//     ]
//   }
// }  
// console.log(data2)

const IndicatorBox = (data) => {
  
  const { time_periods, categories, values } = data.data;
  const chartData = {
    type: 'donut',
    series: [0,47.83,33.33,0.18,18.64],
    height: 400,
    width : 400,
    options: {
      plotOptions: {
        pie: {
          offsetY: 0,
          offsetX: 0,
          dataLabels: {
            enabled: false
          }
        }
      },
      colors: ['#00ff00','#0000ff','#ff0000','#00ffee','#ffeegg'],
      labels: ['Promoters','FIIS','DIIS','Government','Public'],
      
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          
        }
      }]
    }
  };
  return (
    
    
      <Grid xs={12}>
        <SubCard>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h2">Shareholders Piechart</Typography>
            </Grid>
          </Grid>
          <Grid spacing={gridSpacing}>
            <Grid xs={12} style={{ padding: '20px' }} sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'grey.800'
            }}>
              <Chart {...chartData} />
            </Grid>
            <Grid xs={12} >
            <TableContainer component={Paper}>
              <Table sx={12} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell >Category</StyledTableCell>
                    {time_periods.map((timePeriod, index) => (
                      <StyledTableCell key={index} >{timePeriod}</StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                {categories.map((category, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell>{category}</StyledTableCell>
                    {time_periods.map((timePeriod, idx) => (
                      <StyledTableCell key={idx}>{values[category][idx]}</StyledTableCell>
                    ))}
                  </StyledTableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
              {/* <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell></StyledTableCell>
                      {Object.keys(data["Promoters"]).map((key) => (
                      <StyledTableCell key={key}>{key}</StyledTableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                    <TableBody>
                    {Object.keys(data).map((key) => (
                        <StyledTableRow key={key}>
                        <TableCell>{key}</TableCell>
                        {Object.values(data[key]).map((value, index) => (
                            <StyledTableCell key={index}>{value}</StyledTableCell>
                        ))}
                        </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer> */}
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    
  );
};

export default IndicatorBox;