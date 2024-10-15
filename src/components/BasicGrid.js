import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
