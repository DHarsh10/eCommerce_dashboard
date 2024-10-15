import React from 'react';
import useTheme from '../contexts/themeContext';
import Box from '@mui/material/Box';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

const RevenueChart = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "light";
//   const [type, setType] = React.useState('line');
const type = "line"

  // Define custom colors based on the current theme
  const lineColors = {
    light: ['#A8C5DA', '#1C1C1C'], // Light theme colors
    dark: ['#C6C7F8', '#A8C5DA'],  // Dark theme colors
  };

  const axisColors = {
    light: {
      axis: '#000',         
      tickLabel: '#000',    
    },
    dark: {
      axis: '#FFF',         
      tickLabel: '#FFF',  
    },
  };

  const currentColors = currentTheme ? lineColors.light : lineColors.dark;
  const currentAxisColors = currentTheme ? axisColors.light : axisColors.dark;

  return (
    <div className='revenueChart p-4'>
      <div className='flex text-[0.972vw]'>
        <p className='rightBorder me-20'><b>Revenue</b></p>
        <p className='rightBorder graphAbb graphAbb1 me-20'>Current Week <b>$58,211</b></p>
        <p className='graphAbb graphAbb2'>Previous Week <b>$68,768</b></p>
      </div>
      <Box sx={{ width: '100%' }}>
        <div>
          <ResponsiveChartContainer
            series={[
              {
                type,
                data: [65, 55, 45, 65, 35],
                color: currentColors[0], // Set color for the first line
              },
              {
                type,
                data: [55, 65, 75, 55, 75],
                color: currentColors[1], // Set color for the second line
              },
            ]}
            xAxis={[
              {
                data: ['A', 'B', 'C', 'D', 'E'],
                scaleType: 'band',
                id: 'x-axis-id',
              },
            ]}
            yAxis={[
              {
                id: 'y-axis-id',
                scaleType: 'linear',
                label: 'Y axis',
              },
            ]}
            height={350}
          >
            <BarPlot />
            <LinePlot />
            <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" lineColor={currentAxisColors.axis} tickLabelColor={currentAxisColors.tickLabel} />
            <ChartsYAxis label="Y axis" position="left" axisId="y-axis-id" lineColor={currentAxisColors.axis} tickLabelColor={currentAxisColors.tickLabel} />
          </ResponsiveChartContainer>
        </div>
      </Box>
    </div>
  );
};

export default RevenueChart;
