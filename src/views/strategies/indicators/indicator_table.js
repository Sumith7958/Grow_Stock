import { Grid, } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import MainCard from 'ui-component/cards/MainCard';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import SubCard from 'ui-component/cards/SubCard';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success[200],
    color: theme.palette.common.white,
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

const Indicator = ({data}) => {
  console.log(data)
  return (
    <MainCard>
      <Grid item>
        <Typography variant="h2">Pivot Points</Typography>
      </Grid>
      <SubCard>
        <Grid>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Pivot</StyledTableCell>
                  <StyledTableCell align="right">Classic</StyledTableCell>
                  <StyledTableCell align="right">Fibonacci</StyledTableCell>
                  <StyledTableCell align="right">Camarilla</StyledTableCell>
                  <StyledTableCell align="right">Woodie</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <StyledTableRow key={row.Name}>
                        <StyledTableCell component="th" scope="row">
                          <Typography variant="h5">{row.Pivot}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Typography variant="h5">{row.Classic}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Typography variant="h5">{row.Fibonacci}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Typography variant="h5">{row.Camarilla}</Typography>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          <Typography variant="h5">{row.Woodie}</Typography>
                        </StyledTableCell>
      
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </SubCard>
    </MainCard>
  );
};

export default Indicator;

