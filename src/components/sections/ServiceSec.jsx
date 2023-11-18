import React from 'react'
import HeadSection from '../elements/HeadSection'
import MyTap from '../elements/MyTap'

const ServiceSec = () => {
  return (
    <div className='Services'>
        <div className='container'>
            <HeadSection>خدماتنا</HeadSection>
                
            <div className="Tabsy">
              <MyTap />
            </div>
                
        </div>
    </div>
  )
}

export default ServiceSec