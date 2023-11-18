import React from 'react'
import { Link } from 'react-router-dom'
import SocialCon from './elements/SocialCon'

// Media
const Apple = '/media/apple.png'
const Play = '/media/play.png'

const Footer = () => {
  return (
    <footer>
        <div className="four-col">
            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        <div className="coly-one">
                            <div className="foo-head mb-3">
                                <h4 className='text-light'>البيت للرعاية الطبية المنزلية</h4>
                            </div>
                            <p className='text-light'>
                                مهمتنا في البيت للرعاية الصحية هي توفير خدمة الرعاية الطبية المنزلية. عبر تقديم حلول الرعاية الصحية والخدمات الطبية المتميزة ذات جودة عالية
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coly-one">
                            <div className="foo-head mb-3">
                                <h4 className='text-light'>
                                    روابط مهمة
                                </h4>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">الشروط والأحكام</Link>
                                </li>
                                <li>
                                    <Link to="#">سياسة الخصوصية</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coly-one">
                            <div className="foo-head mb-3">
                                <h4 className='text-light'>
                                    حمل التطبيق 
                                </h4>
                            </div>
                            <div className="app-down22">
                                <Link to="#">
                                    <img src={Apple} alt="Apple" width="140px" />
                                </Link>
                                <Link to="#">
                                    <img src={Play} alt="Play" width="120px" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="coly-one">
                            <div className="foo-head mb-3">
                                <h4 className='text-light'>
                                    تابعنا على  
                                </h4>
                            </div>
                            <SocialCon />
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="botto-dev text-center py-3">
            <p className='text-light fs-6 m-0 p-0'>
                جميع الحقوق محفوظة للبيت للرعاية الصحية ®
            </p>
        </div>
    </footer>
  )
}

export default Footer