import { useState } from 'react';
import { Box,Table, Typography, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';

const headCells = [
  {
    id: 'Name',
    align: 'left',
    disablePadding: false,
    label: 'INDEX'
  },
  {
    id: 'Close',
    align: 'left',
    disablePadding: false,
    label: 'Value'
  },
  {
    id: 'percent',
    align: 'right',
    disablePadding: false,
    label: 'Percentage'
  }
];

// ==============================|| ORDER TABLE ||============================== //

export default function IndexTable({ onStockSelect, rows  }) {
  const [selected] = useState([]);
  // console.log(rows)
  const handleStockClick = (row) => {
    onStockSelect(row);
  };

  const isSelected = (indexname) => selected.indexOf(indexname) !== -1;

  return (
    <Box>
      <MainCard>
        <TableContainer>
          <Table
            size="small" aria-label="a dense table"
            sx={{
              '& .MuiTableCell-root:first-of-type': {
                pl: 2
              },
              '& .MuiTableCell-root:last-of-type': {
                pr: 3
              }
            }}
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell key={headCell.id} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
                    <Typography color="inherit" sx={{fontSize: '1rem',fontWeight: 450,pb:1}}>
                    {headCell.label}
                      </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    cursor
                    role="checkbox"
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.Name}
                    selected={isItemSelected}
                    onClick={() => handleStockClick(row.Name)}
                    style={{ backgroundColor: isItemSelected ? '#e0e0e0' : 'inherit' }}
                  >
                    <TableCell component="th" id={labelId} scope="row" align="left">
                      <Typography variant="subtitle1" color="inherit">
                        {row.Name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="subtitle1" color="inherit" >
                        {row.Close.toLocaleString('en-US')}
                      </Typography></TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle1" color="inherit" sx={{ color: row.percent > 0 ? 'green' : 'red',fontSize: '1rem',fontWeight: 450,pb:0.9}}>
                        {row.percent.toLocaleString('en-US')}%
                      </Typography></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </MainCard>
    </Box>
  );
}

