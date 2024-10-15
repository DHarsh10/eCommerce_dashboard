import React from 'react'

const Activities = ({activitiesList, header}) => {
  return (
    <div className='mt-8'>
        <h4 className='menu-acc-header mb-6'>{header}</h4>
      {activitiesList.map((elm, i) => (
        <div key={i}>
          <div className={`flex items-start mb-2 activitiesEl ${i === activitiesList.length-1 || 'mlAfter'}`}>
            <img src={elm.img} alt="" className='w-[1.667vw] me-3' />
            <div>
                <p className='mb-0 text-[0.972vw]'>{elm.text}</p>
                <small className='semiWhite text-[0.833vw]'>{elm.time}</small>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default Activities