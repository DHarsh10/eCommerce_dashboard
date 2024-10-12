import React from 'react'
import { clockDark, bellDark, sidebarDark, sunDark, starDark, sidebar, star, sun, clock, bell, search, text } from '../utils/assets/svgs'
import useTheme from '../contexts/themeContext';


const NavBar = ({ showNav, setShowNav, showRightNav, setShowRightNav, btnFn }) => {
  const {theme} = useTheme();
  const themeIcons = {
    sidebar: theme === 'light' ? sidebar : sidebarDark,
    star: theme === 'light' ? star : starDark,
    sun: theme === 'light' ? sun : sunDark,
    clock: theme === 'light' ? clock : clockDark,
    bell: theme === 'light' ? bell : bellDark,
  };
  
  return (
    <header className={`header${showNav ? ' body-pd' : '' }${showRightNav ? ' body-pd-right' : ''} dark:bg-[#1C1C1C]`}>
        <div className='flex items-center'>
            <div className="header_toggle pe-4 cursor-pointer">
                <img src={themeIcons.sidebar} alt=""  onClick={()=> setShowNav(!showNav)} />
            </div>
            <img src={themeIcons.star} alt="" className='cursor-pointer' />
        </div>

        <div className='flex items-center'>
            <div className='me-4 flex navInput'>
                <img src={search} alt="" className='ps-2'/>
                <input type="text" className='text-sm px-2 ' placeholder='Search'/>
                <img src={text} alt="" className='pe-2' />
            </div>
            <img src={themeIcons.sun} alt="" className='pe-4 cursor-pointer' onClick={btnFn}/>
            <img src={themeIcons.clock} alt="" className='pe-4 cursor-pointer'/>
            <img src={themeIcons.bell} alt="" className='pe-4 cursor-pointer'/>
            <div className="header_toggle cursor-pointer">
                <img src={themeIcons.sidebar} alt=""  onClick={()=> setShowRightNav(!showRightNav)} />
            </div>
        </div>
    </header>
  )
}

export default NavBar