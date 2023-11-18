import React from 'react'

const TabButton = ({icon, title}) => {
  return (
    <div className="tap_button text-center">
        <img src={icon} alt="#" />
        <h4>{title}</h4>
    </div>
  )
}

export default TabButton
