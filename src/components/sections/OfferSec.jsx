import React from 'react'
import HeadSection from '../elements/HeadSection'
import TapOne from '../elements/serviceTabs/TapOne'

const OfferSec = () => {
  return (
    <div className='Offers'>
        <div className='container'>
            <HeadSection>عروضنا</HeadSection>
                
            <div className="Tabsy">
              <TapOne />
            </div>
                
        </div>
    </div>
  )
}

export default OfferSec