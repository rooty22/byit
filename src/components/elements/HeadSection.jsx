import React from 'react'

const HeadSection = ({children}) => {
  return (
    <div className='head-sec text-center mb-5'>
        <h3>{children}</h3>
    </div>
  )
}

export default HeadSection