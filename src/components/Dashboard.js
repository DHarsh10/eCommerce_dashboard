import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '../contexts/themeContext'

const Dashboard = () => {
  const [theme, setThemeMode] = useState('light');
  const [showNav, setShowNav] = useState(true);
  const [showRightNav, setShowRightNav] = useState(true);

  const setDarkTheme = ()=>{
    setThemeMode('dark');
  }

  const setLightTheme = ()=>{
    setThemeMode('light');
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme])

  const btnFn =()=>{
    theme === "light" ? setDarkTheme() : setLightTheme();
  }
  return (
        <ThemeProvider  value={{theme, setDarkTheme, setLightTheme}}>
            <div className={`body-area${showNav ? ' body-pd' : '' }${showRightNav ? ' body-pd-right' : ''} dashboard-wrapper`}>
                <NavBar {...{ showNav, setShowNav, showRightNav, setShowRightNav, btnFn }} />
                <LeftMenu showNav={showNav}/>
                <RightMenu showRightNav={showRightNav}/>
                <div className="pt-14 pb-4 dark:bg-[#1C1C1C] dashboardBody">
                    <Outlet/>
                </div>
            </div>
        </ThemeProvider>
  )
}

export default Dashboard