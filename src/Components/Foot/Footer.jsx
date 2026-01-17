import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDiscord, faXTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Foote.css'
const Footer = () => {
  return (
    <div id='icn-con'>

        <div id='icn'>
            <a href="#"><FontAwesomeIcon icon={faLinkedin} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faGithub} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} className='icns'/></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} className='icns'/></a>
        </div>
    </div>
  )
}

export default Footer
