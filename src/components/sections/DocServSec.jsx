import React from 'react'
import HeadSection from '../elements/HeadSection'
import DocServ from '../elements/DocServ'
import { Link } from 'react-router-dom'

// Import
const phot1 = '/media/aft1.jpg'
const App = '/media/app.png'
const Apple = '/media/apple.png'
const Play = '/media/play.png'

const DocServSec = () => {
  return (
    <div className='DocServ'>
        <HeadSection>الخدمات الطبية من البيت إلى كل بيت</HeadSection>
        <div className="backo">
            <div className="container">
                <div className="all-DocSer">
                    <div className="row">
                        <DocServ photo={phot1} text='توفير خدمات وقائية وتأهيلية وعلاجية للمرضى' />
                        <DocServ photo={phot1} text='توفير خدمات وقائية وتأهيلية وعلاجية للمرضى' />
                        <DocServ photo={phot1} text='توفير خدمات وقائية وتأهيلية وعلاجية للمرضى' />
                        <DocServ photo={phot1} text='توفير خدمات وقائية وتأهيلية وعلاجية للمرضى' />
                    </div>
                </div>

                {/* App Download */}
                <div className="app-down">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="DownLogo">
                                <div className="texte">
                                    <h4>حمل الأن التطبيق</h4>
                                    <p>
                                        احصل على جميع الخدمات الطبية المنزلية وأنت مرتاح في بيتك من خلال تطبيق البيت.
                                    </p>
                                </div>
                                <div className="logos">
                                    <Link to="#">
                                        <img src={Apple} alt="Apple" />
                                    </Link>
                                    <Link to="#">
                                        <img src={Play} alt="Play" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="AppPhot">
                                <img src={App} alt="Aft" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DocServSec