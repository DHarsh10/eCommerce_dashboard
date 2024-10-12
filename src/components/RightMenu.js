import React from 'react'

const RightMenu = ({showRightNav}) => {
  return (
    <div className={`r-navbar${showRightNav ? ' showRight' : '' } dark:bg-[#1C1C1C]`}>
        <nav className="nav">
            
        </nav>
    </div>
  )
}

export default RightMenu