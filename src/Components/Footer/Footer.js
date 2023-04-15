import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-links-div'>
            <h1>LINKS</h1>
            <div className='footer-link'><Link to="https://www.linkedin.com/in/seansiganoff/">LinkedIn</Link></div>
            <div className='footer-link'><Link to="https://github.com/seansiganoff">GitHub</Link></div>
            
        </div>
        <div className='footer-contacts-div'>
            <h1>CONTACTS</h1>
            <div className='contacts'><Link to="tel:954-937-2090">phone: 954-937-2090</Link></div>
            <div className='contacts'><Link to="mailto:seansiganoff83@gmail.com">email: seansiganoff83@gmail.com</Link></div>
        </div>

        {/* When the view width reaches 1000 or less, it will enable the contact icons for mobile view */}
        <div className='footer-mobile-view'>
            <h1>CONTACTS</h1>
            <div className='mobile-contacts-container'>
              <div><Link to="tel:954-937-2090"><img src={require('../../images/phone-icon.png')} /></Link></div>
              <div><Link to="sms:954-937-2090"><img src={require('../../images/text-icon.png')} /></Link></div>
              <div><Link to="mailto:seansiganoff83@gmail.com"><img src={require('../../images/email-icon.webp')} /></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Footer