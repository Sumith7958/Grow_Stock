import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography,Grid,Card,Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function DenseTable({data,value,name}) {
  console.log(data)
  const rows=data
  const theme = useTheme();
  return (
    <Grid>
      <Card sx={{border:'1px solid',borderColor: theme.palette.primary[200] + 25}}>
        <Grid container sx={{ p: 2, pb: 2, color: '#fff' }}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h4" sx={{ color: theme.palette.error.dark }}>{name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" sx={{ color: theme.palette.error.dark }}>
                  {value}
                </Typography> 
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} size="small" >
          <TableHead>
            <TableRow>
              <TableCell>Company Name </TableCell>
              <TableCell >Price</TableCell>
              <TableCell >Contribution</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant="h5">{row.Name}</Typography>
                </TableCell>
                <TableCell >
                  <Box display="flex" alignItems="center">
                    <Typography variant="h5" >{row.close}</Typography> 
                    <Typography variant="h5" sx={{ color: theme.palette.error.dark,pl:0.5}}> ({row.change}%)</Typography> 
                  </Box>
                </TableCell>
                <TableCell >
                  <Typography variant="h4" sx={{ color: theme.palette.error.dark }}>{row.Contribution}</Typography> 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
