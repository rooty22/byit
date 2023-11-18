import React from 'react'
import HeadSection from '../elements/HeadSection'
import TapOne from '../elements/serviceTabs/TapOne'

const TopOffer = () => {
  return (
    <div className='Offers'>
        <div className='container'>
            <HeadSection>الخدمات الأكثر تداول</HeadSection>
                
            <div className="Tabsy">
              <TapOne />
            </div>
                
        </div>
    </div>
  )
}

export default TopOffer