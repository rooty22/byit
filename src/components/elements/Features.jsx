import React from 'react'

const Feature = ({title, content, icon}) => {
  return (
    <div className="col-md-3">
        <div className="box my-3">
            <div className="ico mb-3">
                <img src={icon} alt="ico1" />
            </div>
            <div className="title-desc">
                <h4 className='mb-2'>{title}</h4>
                <p>
                    {content}
                </p>
            </div>
        </div>
    </div>
  );
};

export default Feature
