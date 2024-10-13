import React from 'react'

const Breadcrumb = ({pathArray}) => {
  pathArray.length === 1 && pathArray.push("default")  
  pathArray = pathArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  return (
    <div>
      {pathArray.map((item, index) => (
        <span key={index} className='font-medium nav-url'>
          {index === pathArray.length - 1 ? (
            <span>{item}</span>
          ) : (
            <span className='nav-url-md'>{item} / </span>
          )}
        </span>
      ))}
    </div>
  )
}

export default Breadcrumb