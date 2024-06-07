import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Typography } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard';
import Bar from './Bar';
import { Grid } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
const styles = {
  tableContainer: {
    marginTop: '20px', // Add spacing as needed
  },
  table: {
    minWidth: 650,
    border: '1px solid #dddddd',  
  },
  tableCell: {
    fontSize: '0.9rem',
    border: '1px solid #dddddd', 
    padding: '8px', 
  },
};
const BarTable = ({tableData,title,data}) => {
  const { time_periods, categories, values } = tableData;
  console.log(tableData)
  return (
    <MainCard>
      <Grid container direction="column">
        <Grid item>
          <Grid container alignItems="center">
            <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>{title}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Bar jsondata={tableData} data={data}/>
      </Grid>
      <SubCard>
      <TableContainer >
        <Table sx={12} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...styles.tableCell, width: '150px' }}>Category</TableCell>
              {time_periods.map((timePeriod, index) => (
                <TableCell key={index} sx={styles.tableCell}>{timePeriod}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {categories.map((category, index) => (
            <TableRow key={index}>
              <TableCell sx={{...styles.tableCell}}>{category}</TableCell>
              {time_periods.map((timePeriod, idx) => (
                <TableCell key={idx} sx={styles.tableCell}>{values[category][idx]}</TableCell>
              ))}
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
      </SubCard>
    </MainCard>
  );
};

export default BarTable;
