import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useTheme from '../contexts/themeContext'

function createData(Name, Price, Quantity, Amount) {
  return { Name, Price, Quantity, Amount };
}

const rows = [
  createData('ASOS Ridley High Waist', "$79.49", 37, "$6,518.18"),
  createData('Marco Lightweight Shirt', "$128.50", 37, "$4,754.50"),
  createData('Half Sleeve  Shirt', "$39.99", 64, "$2,559.36"),
  createData('Lightweight Jacket', "$20.00",184, "$3,680.00"),
  createData('Marco Shoes', "$79.49", 64, "$1,965.81"),
];

export default function BasicTable() {
  const {theme} = useTheme();
  const stylesList = theme === "light" ? { color: 'rgba(28, 28, 28, 0.4)', borderColor: 'rgba(28, 28, 28, 0.3)' } : { color: 'rgba(255, 255, 255, 0.4)', borderColor: 'rgba(255, 255, 255, 0.4)' }
  return (
    <div className='p-4 prodTable'>
      <p className='text-left text-[0.972vw] font-semibold'>Top Selling Products</p>
      <TableContainer component={Paper} className='p-hght'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={stylesList}>Name</TableCell>
            <TableCell align="left" sx={stylesList}>Price</TableCell>
            <TableCell align="left" sx={stylesList}>Quantity&nbsp;(g)</TableCell>
            <TableCell align="left" sx={stylesList}>Amount&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{ borderBottom: 'none' }}>
                {row.Name}
              </TableCell>
              <TableCell align="left" sx={{ borderBottom: 'none' }}>{row.Price}</TableCell>
              <TableCell align="left" sx={{ borderBottom: 'none' }}>{row.Quantity}</TableCell>
              <TableCell align="left" sx={{ borderBottom: 'none' }}>{row.Amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}