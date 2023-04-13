import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-div'>
            <h1>LINKS</h1>
            <div className='footer-link'><Link to="https://www.linkedin.com/in/seansiganoff/">LinkedIn</Link></div>
            <div className='footer-link'><Link to="https://github.com/seansiganoff">GitHub</Link></div>
            
        </div>
        <div className='footer-div'>
            <h1>CONTACTS</h1>
            <div className='contacts'><Link to="tel:954-937-2090">Call Me</Link></div>
            <div className='contacts'><Link to="sms:954-937-2090">Message Me</Link></div>
            <div className='contacts'><Link to="mailto:seansiganoff83@gmail.com">email: seansiganoff83@gmail.com</Link></div>
        </div>
    </div>
  )
}

export default Footer