import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import useTheme from '../contexts/themeContext';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const ActualProjections = () => {
  const { theme } = useTheme();
  const currentTheme = theme === "light";

  const pDataColor = currentTheme ? '#A8C5DA' : '#A8C5DA'; 
  const uDataColor = currentTheme ? 'rgba(168, 197, 218, 0.5)' : 'rgba(168, 197, 218, 0.5)'; 

  return (
    <div className='ProjectionsActuals p-4'>
      <p className='text-left text-[0.972vw] font-semibold'>Projections vs Actuals</p>

      <BarChart
        width={500}
        height={300}
        series={[
          { data: pData, id: 'pvId', stack: 'total', color: pDataColor },
          { data: uData, id: 'uvId', stack: 'total', color: uDataColor },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
        yAxis={[{ scaleType: 'linear', min: 0, max: 10000 }]}
      />
    </div>
  );
}

export default ActualProjections;
