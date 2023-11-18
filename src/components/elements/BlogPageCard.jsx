import React from 'react'
import { Link } from 'react-router-dom'

const BlogPageCard = ({phot, title, txt, date, btnName, btnLink}) => {
  return (
    <div className='col-md-3'>
        <div className="carde">
            <div className="phote">
                <img src={phot} alt="img" />
            </div>
            <div className="conten">
                <h4 className='mb-3'>{title}</h4>

                <p>
                    {txt}
                </p>
            </div>
            <div className="date">
                <span>{date}</span>
                <Link to={btnLink}>{btnName}</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogPageCard