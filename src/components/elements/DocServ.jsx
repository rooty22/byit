import React from 'react'

const DocServ = ({photo, text}) => {
  return (
    <div className='col-md-3'>
        <div className="Doc">
            <img src={photo} alt="Doc" />
            <div className="txt">
                <h5>
                    {text}
                </h5>
            </div>
        </div>
    </div>
  )
}

export default DocServ