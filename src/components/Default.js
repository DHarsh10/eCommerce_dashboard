import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OrdersData from './OrdersData';
import LocationRevenue from './LocationRevenue';
import ActualProjections from './ActualProjections';
import RevenueChart from './RevenueChart';
import BasicTable from './BasicTable';
import PieChartWithPaddingAngle from './PieChartWithPaddingAngle';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

const Default = () => {
return(
    <div>
        <h1 className='text-[0.972vw]'>eCommerce</h1>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Item><OrdersData/></Item>
            </Grid>
            <Grid item xs={6}>
            <Item><ActualProjections/></Item>
            </Grid>
            <Grid item xs={9}>
            <Item><RevenueChart/></Item>
            </Grid>
            <Grid item xs={3}>
            <Item><LocationRevenue/></Item>
            </Grid>
            <Grid item xs={9}>
            <Item><BasicTable/></Item>
            </Grid>
            <Grid item xs={3}>
            <Item><PieChartWithPaddingAngle/></Item>
            </Grid>
        </Grid>
    </Box>
    </div>
)
}

export default Default