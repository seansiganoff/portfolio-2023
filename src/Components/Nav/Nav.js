import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const Nav = () => {
  
  const visible = { opacity: 1, y: 10, transition: { duration: 2 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 1 },
    visible
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 3 } }}
     className='nav-container'>
        <ul>
          <motion.li variants={itemVariants}><NavLink to="/">Home</NavLink></motion.li>
          <motion.li variants={itemVariants}><NavLink to="/about">About</NavLink></motion.li>
          <motion.li variants={itemVariants}><NavLink to="/projects">Projects</NavLink></motion.li>
          <motion.li variants={itemVariants}><NavLink to="/about">About</NavLink></motion.li>
        </ul>
    </motion.div>
  )
}

export default Nav