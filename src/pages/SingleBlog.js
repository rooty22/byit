import React, { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LastNews from '../components/sections/LastNews'
import { Link } from 'react-router-dom'

// Icon
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

// Media
const photu = '/media/serv.jpg'

function SingleBlog() {
  return (
    <Fragment>
        <Header />

        <div className='SingleBlog'>
            <div className='container'>

                <div className='Photo-head'>
                    <div className='blog-data'>
                        <div className='date-btn mb-4'>
                            <span>March/20/2023</span>
                            <h5>نصائح طبية</h5>
                            <div className='socia'>
                                <h6>شارك المقال</h6>
                                <Link to="#">
                                    <IoLogoWhatsapp />
                                </Link>
                                <Link to="#">
                                    <FaSquareXTwitter />
                                </Link>
                            </div>
                        </div>
                        <h3>
                            ما أهمية تمارين كيجل للنساء
                        </h3>
                        <p>
                            مهمتنا في البيت للرعاية الصحية هي توفير خدمة الرعاية الطبية المنزلية.
                        </p>
                    </div>
                </div>

                <div className='content'>
                    <p>
                        عبر تقديم حلول الرعاية الصحية والخدمات الطبية المتميزة ذات جودة عالية .
                    </p>
                    <p>
                        عبر تقديم حلول الرعاية الصحية والخدمات الطبية المتميزة ذات جودة عالية .
                    </p>
                    <h5>
                        أهمية التمرينات
                    </h5>
                    <p>
                        عبر تقديم حلول الرعاية الصحية والخدمات الطبية المتميزة ذات جودة عالية .
                    </p>
                    <img src={photu} alt='Blog' />
                    <p>
                        عبر تقديم حلول الرعاية الصحية والخدمات الطبية المتميزة ذات جودة عالية .
                    </p>
                </div>

            </div>
            {/* Last News */}
            <LastNews />
        </div>

        <Footer />
    </Fragment>
  )
}

export default SingleBlog