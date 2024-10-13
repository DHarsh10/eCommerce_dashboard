import React from 'react'
import Notifications from './Notifications'
import Activities from './Activities'
import Contacts from './Contacts'

import { notificationsList, activitiesList, contactsList } from '../data/rightAccordionData'

const RightMenu = ({showRightNav}) => {
  return (
    <div className={`r-navbar${showRightNav ? ' showRight' : '' } dark:bg-[#1C1C1C]`}>
        <nav className="nav">
            <Notifications notificationsList={notificationsList} header="Notifications"/>
            <Activities activitiesList={activitiesList} header="Activities"/>
            <Contacts contactsList={contactsList} header="Contacts"/>
        </nav>
    </div>
  )
}

export default RightMenu