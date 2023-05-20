import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Nav = () => {
  
  //Used in framer motion to bring in the element
  const visible = { opacity: 1, x: 0, transition: { duration: 0.8 } };

  return (
    //Framer motion used to transition
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 0 } }}
     className='nav-container'>
        <ul>
        <motion.li variants={{hidden: {opacity: 0, x: -1000}, visible}}><button onClick={() => window.location.href =  'https://www.linkedin.com/in/seansiganoff'}>LINKEDIN</button></motion.li>
        <motion.li variants={{hidden: {opacity: 0, x: 1000}, visible}}><button onClick={() => window.location.href =  'https://github.com/seansiganoff'}>GITHUB</button></motion.li>
        <motion.li variants={{hidden: {opacity: 0, x: -1000}, visible}}><Link to="tel:954-937-2090"><button>CALL</button></Link></motion.li>
        <motion.li variants={{hidden: {opacity: 0, x: 1000}, visible}}><Link to="mailto:seansiganoff83@gmail.com"><button>EMAIL</button></Link></motion.li>
          
        </ul>
    </motion.div>
  )
}

export default Nav