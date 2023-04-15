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
      <motion.li variants={{hidden: {opacity: 0, x: 1000}, visible}}><Link to="https://www.linkedin.com/in/seansiganoff/">LINKEDIN</Link></motion.li>
          <motion.li variants={{hidden: {opacity: 0, x: -1000}, visible}}><Link to="tel:954-937-2090">CALL</Link></motion.li>
          <motion.li variants={{hidden: {opacity: 0, x: 1000}, visible}}><Link to="mailto:seansiganoff83@gmail.com">email</Link></motion.li>
          <motion.li variants={{hidden: {opacity: 0, x: -1000}, visible}}><Link to="https://github.com/seansiganoff">GitHub</Link></motion.li>
        </ul>
    </motion.div>
  )
}

export default Nav