import React from 'react'
import { Link } from 'react-router-dom'

// Import Media 
const phot = '/media/blog.png'

const BlogItem = () => {
  return (
    <div className='boxe'>
        <img src={phot} alt="blog" />
        <div className="conte">
            <h4 className='mb-3'>
                10 أطعمة تسبب تهيجاً في القولون عليك تجنبها
            </h4>
            <Link to="#">المزيد</Link>
        </div>
    </div>
  )
}

export default BlogItem