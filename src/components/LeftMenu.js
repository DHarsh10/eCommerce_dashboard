import React from 'react'
import { iconSet } from '../utils/assets/svgs'
import CustomizedAccordions from './CustomizedAccordions'
import { accordionData, accordionData2 } from '../data/leftAccordionData'
import Tabs from './Tabs'


const LeftMenu = ({ showNav}) => {
  return (
    <div className={`l-navbar${showNav ? ' show' : '' } dark:bg-[#1C1C1C]`}>
        <nav className="nav">
            <div className='flex items-center'>
                <img src={iconSet} alt="" className='pe-3 min-h-[4.722vw] w-[2.5vw]'/>
                <p className='mb-0 profileName'>ByeWind</p>
            </div>
            <Tabs/>
            <div>
                <CustomizedAccordions accordions={accordionData} header="Dashboards" />
                <CustomizedAccordions accordions={accordionData2} header="Pages" />
            </div>
        </nav>
    </div>
  )
}

export default LeftMenu