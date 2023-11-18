import React from 'react'

const BannerCol = ({icon, num, title}) => {
  return (
    <div className="col-md-4">
        <div className="bano">
            <img src={icon} className='mb-3' alt="#" />
            <h3>{num}</h3>
            <h5>{title}</h5>
        </div>
    </div>
  )
}

export default BannerCol