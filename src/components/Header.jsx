import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
// Get Navbar
import MyNavbar from './elements/MyNavbar'
import MyNavTow from './elements/MyNavTow'

// Get Social Icon
const Whatsapp = '/media/whats.png'
const Insta = '/media/w5.png'
const Snap = '/media/w4.png'
const TicT = '/media/w3.png'
const Twitt = '/media/w2.png'

// Get Media
const Logo = '/media/Logo.png'
const GPlay = '/media/play.png'
const Apply = '/media/apple.png'

const Header = () => {
    // const [mob] = useState(false)

    return (
        <div className='Header'>
            <div className="container">
                <div className="head-one">

                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="menu">
                        <MyNavbar />
                    </div>
                    <div className="app-download">
                        <h5>حمل التطبيق الأن</h5>
                        <div className="logos-down">
                            <img src={GPlay} alt="Play" />
                            <img src={Apply} alt="apple" style={{ maxWidth: '95px' }} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="head-tow">
                <div className="container">
                    <div className="all-menu">
                        <div className="menu-tow">
                            <MyNavTow />
                        </div>

                        <div className="lango">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    اللغة
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">عربي</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">English</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="social-ico">
                            <Link to="https://google.com" className='whats'>
                                <img src={Whatsapp} alt="Whats" />
                            </Link>
                            <Link to="https://google.com" className='face'>
                                <img src={Insta} alt="Whats" />
                            </Link>
                            <Link to="https://google.com" className='linke'>
                                <img src={Twitt} alt="Whats" />
                            </Link>
                            <Link to="https://google.com" className='twitt'>
                                <img src={Snap} alt="Whats" />
                            </Link>
                            <Link to="https://google.com" className='twitt'>
                                <img src={TicT} alt="Whats" />
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header