import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogSec from '../components/sections/BlogSec'
import LastNews from '../components/sections/LastNews'

function Blogs() {
  return (
    <Fragment>
    
        {/* Header */}
        <Header/>

        <div className='Blogs'>
            {/* BlogSec */}
            <BlogSec />

            {/* Last News */}
            <LastNews />
        </div>

        {/* Footer */}
        <Footer />

    </Fragment>
  )
}

export default Blogs