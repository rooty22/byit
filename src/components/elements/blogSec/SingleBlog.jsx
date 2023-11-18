import React from 'react'
import { Link } from 'react-router-dom'

// Import Media 
const phot = '/media/blog.png'

const SingleBlog = () => {
  return (
    <div className="single-blog">
        <div className="photo">
            <img src={phot} alt="blog" />
        </div>
        <div className="content">
            <h3>ما أهمية تمارين كيجل للنساء؟ وكيف يتم إجراؤها؟</h3>
            <p>
                ما هي تمارين كيجل؟ ما أهميتها للنساء؟ وما طريقة إجراؤها؟ كل هذا وأكثر تجده في مدونة البيت لنوفر عليكم عناء البحث
            </p>
        </div>
        <div className="date">
            <Link to="#">المزيد...</Link>
            <span>March/2023</span>
        </div>
    </div>
  )
}

export default SingleBlog