import React from 'react'
import { Link } from 'react-router-dom';

const Service = ({photo, icon, title, content, price, link, btnName}) => {
  return (
    <div className="col-md-3">
      <div className="serv">
        <i className={icon}></i>
        <div className="mges">
          <img src={photo} alt="#" />
        </div>
        <div className="title">
          <h4>{title}</h4>
          <p>
            {content}
          </p>
        </div>
        <div className="price">
          <span>{price} ريال</span>
          <Link to={link} className='btn btn-primary'>{btnName}</Link>
        </div>
      </div>
    </div>
  );
};

export default Service
