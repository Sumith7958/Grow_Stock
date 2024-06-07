
import { Grid, Typography, Button} from '@mui/material';
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


const IndicatorBox = ({data}) => {
  console.log(data)
  var rows=data.table
  var value=data.piedata

  if (!rows || rows.length === 0) {
    rows=[
      {
        "Name": "RSI(14)",
        "Value": 44.58,
        "Action": "Sell"
      },
      {
        "Name": "STOCH(9,6)",
        "Value": 38.37,
        "Action": "Sell"
      },
      {
        "Name": "ADX(14)",
        "Value": 27.805,
        "Action": "Sell"
      },
      {
        "Name": "CCI(14)",
        "Value": -155.8097,
        "Action": "Sell"
      }
    ]
  }
  const chartData = {
    type: 'donut',
    series: value,
    height: 300,
    width : 300,
    options: {
      chart: {
        width: 600,
        type: 'donut',
      },
      legend: {
        position: 'bottom',
      },
      plotOptions: {
        pie: {
          // startAngle: -90,
          // endAngle: 90,
          offsetY: 0,
          offsetX: 0,
          dataLabels: {
            enabled: false
          }
        }
      },
      colors: ['#ff0000','#adadad','#00ff00'],
      labels: ['SELL','NEUTRAL','BUY'],
      
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
              <Typography variant="h2">Momentum</Typography>
            </Grid>
            <Grid item>
                <Button
                  size='large'
                  style={{
                    color: 'white', // Set text color to red
                    backgroundColor: '#00C853' // Set background color to blue
                  }}
                >
                  Overall : {data.recommond}
                </Button>
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
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">Name</StyledTableCell>
                      <StyledTableCell align="left">Value</StyledTableCell>
                      <StyledTableCell align="left">Zone</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow
                        key={row.Name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <StyledTableCell align="left">
                          <Typography variant="h5">{row.Name}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Typography variant="h5">{row.Value}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <Typography variant="h5">{row.Action}</Typography>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    
  );
};

export default IndicatorBox;