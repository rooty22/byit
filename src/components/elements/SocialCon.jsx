import React from 'react'
import { Link } from 'react-router-dom'

// Media
const Soc1 = '/media/whats.png'
const Soc2 = '/media/w2.png'
const Soc3 = '/media/w3.png'
const Soc4 = '/media/w4.png'
const Soc5 = '/media/w5.png'

const SocialCon = () => {
  return (
    <div className="social-ico">
        <Link to="#">
            <img src={Soc1} alt="Apple" />
        </Link>
        <Link to="#">
            <img src={Soc2} alt="Play" />
        </Link>
        <Link to="#">
            <img src={Soc3} alt="Play" />
        </Link>
        <Link to="#">
            <img src={Soc4} alt="Play" />
        </Link>
        <Link to="#">
            <img src={Soc5} alt="Play" />
        </Link>
    </div>
  )
}

export default SocialCon