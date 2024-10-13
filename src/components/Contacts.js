import React from 'react'

const Contacts = ({contactsList, header}) => {
  return (
    <div className='mt-8'>
        <h4 className='menu-acc-header mb-6'>{header}</h4>
      {contactsList.map((elm, i) => (
        <div key={i}>
          <div className='flex items-start mb-3 contactEl'>
            <img src={elm.img} alt="" className='w-[1.667vw] me-3' />
            <p className='mb-0 text-[0.972vw]'>{elm.name}</p>
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default Contacts