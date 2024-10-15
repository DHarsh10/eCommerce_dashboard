import React from 'react'
import{worldMap, worldMapDark} from "../utils/assets/svgs/index"
import useTheme from '../contexts/themeContext'
import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';
import { locationRevenueData } from '../data/dafaultData';

const LocationRevenue = () => {
  const {theme} = useTheme();
  const mapSrc = theme === "light" ? worldMap : worldMapDark;
  return (
    <div className='LocationRevenue p-4'>
        <p className='text-[0.972vw] font-semibold'>Revenue by Location</p>
        <div className='flex justify-center mb-4'>
            <img src={mapSrc} alt="" className='w-[10.694vw]' />
        </div>

        {locationRevenueData.map((location, index) => (
        <div key={index} className='mb-4'>
          <div className='flex justify-between'>
            <p className='mb-1'>{location.city}</p>
            <p className='mb-1'>{location.Percent}K</p>
          </div>
          
          {/* Progress bar */}
          <Stack spacing={2} sx={{ flex: 1 }}>
            <LinearProgress
              determinate
              value={parseInt(location.Percent, 10)}
              sx={{
                height: '5px',
                backgroundColor: 'rgba(168, 197, 218, 0.2)',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#A8C5DA',
                },
              }}
            />
          </Stack>
        </div>
      ))}
    </div>
  )
}

export default LocationRevenue