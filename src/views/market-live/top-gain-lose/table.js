import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { useTheme } from '@mui/material/styles';
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Name',
    numeric: false,
    disablePadding: true,
    label: 'Stock Name',
  },
  {
    id: 'Close',
    numeric: false,
    label: 'Close',
  },
  {
    id: 'percent',
    numeric: false,
    label: 'Percentage',
  },
  {
    id: 'change',
    numeric: false,
    label: 'Change',
  },
  {
    
    id: 'Open',
    numeric: false,
    label: 'Open',
    
  },
  {
    id: 'High',
    numeric: false,
    label: 'High',
  },
  {
    id: 'Low',
    numeric: false,
    label: 'Low',
  },
  {
    id: 'volume',
    numeric: true,
    label: 'Volume',
  },
];

function EnhancedTableHead(props) {
  const theme = useTheme();
  const {order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            //padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{fontSize: '1.1rem',fontWeight: 450,color: theme.palette.primary[500],pt:0.6}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'desc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function EnhancedTable({isLoading,data}) {
  const theme = useTheme();
  const rows=data
  console.log(rows)

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('percent');
  

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(() =>
      stableSort(rows, getComparator(order, orderBy)),
      [order, orderBy],
  );

  return (
    <>
      {isLoading ? (
        <SkeletonPopularCard />
      ) : (
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <Table
                sx={{ minWidth: 750 }}
                aria-labelledby="tableTitle"
              >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {visibleRows.map((row) => {
                    return (
                      <TableRow hover key={row.id} sx={{ cursor: 'pointer' }}>
                        <TableCell sx={{fontSize: '0.9rem',fontWeight: 430,color: theme.palette.primary[500],py:1.5}}>{row.Name}</TableCell>
                        <TableCell align="left" sx={{fontSize: '0.9rem',fontWeight: 430,color: theme.palette.primary[500],py:0.7}}>₹{row.Close}</TableCell>
                        <TableCell align="left" sx={{fontSize: '0.9rem',fontWeight: 430,color: row.percent > 0 ? 'green' : 'red',py:0.7}}>{row.percent.toLocaleString('en-US', { maximumFractionDigits: 2 })}%</TableCell>
                        <TableCell align="left" sx={{fontSize: '0.9rem',fontWeight: 430,color: row.change > 0 ? 'green' : 'red',py:0.7}}>₹{row.change.toLocaleString('en-US', { maximumFractionDigits: 1 })}</TableCell>
                        <TableCell align="left" sx={{fontSize: '0.9rem',fontWeight: 430,color: theme.palette.primary[500],py:0.7}}>₹{row.Open}</TableCell>
                        <TableCell align="left" sx={{fontSize: '0.9rem',fontWeight: 430,color: theme.palette.primary[500],py:0.7}}>₹{row.High}</TableCell>
                        <TableCell align="left" sx={{fontSize: '0.9rem',fontWeight: 430,color: theme.palette.primary[500],py:0.7}}>₹{row.Low}</TableCell>
                        <TableCell align="right" sx={{fontSize: '0.9rem',fontWeight: 430,color: theme.palette.primary[500],py:0.7}}>{row.volume}Cr</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Box>
      )}
    </>
  );
}

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

