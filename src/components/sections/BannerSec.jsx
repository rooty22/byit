import React from 'react'
import BannerCol from '../elements/BannerCol'

// Import Image
const ico = '/media/fea1.png'
const ico2 = '/media/fea2.png'
const ico3 = '/media/fea3.png'

const BannerSec = () => {
  return (
    <div className='BannerSec text-center'>
        <div className="container">
            <div className="row">
                
                <BannerCol icon={ico} num={63} title="عائلة" />
                <BannerCol icon={ico2} num={163} title="اسرة" />
                <BannerCol icon={ico3} num={263} title="لجنة طبية" />
                
            </div>
        </div>
    </div>
  )
}

export default BannerSec