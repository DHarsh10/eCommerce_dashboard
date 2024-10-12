import React from 'react'

const LeftMenu = ({ showNav}) => {
  return (
    <div className={`l-navbar${showNav ? ' show' : '' } dark:bg-[#1C1C1C]`}>
        <nav className="nav">
            
        </nav>
    </div>
  )
}

export default LeftMenu