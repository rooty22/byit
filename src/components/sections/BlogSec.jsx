import React from 'react'
import SingleBlog from '../elements/blogSec/SingleBlog'
import BlogItem from '../elements/blogSec/BlogItem'
import HeadSection from '../elements/HeadSection'

const BlogSec = () => {
  return (
    <div className='Blogsec'>
        <div className="container">
            <HeadSection>المقالات</HeadSection>

            <div className="all-con">

                <div className="right-dev">
                    <SingleBlog />
                </div>

                <div className="left-dev">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>

            </div>
        </div>
    </div>
  )
}

export default BlogSec