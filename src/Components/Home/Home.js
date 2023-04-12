import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {

 
  
  

  return (
    
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.7 } } }} 
    className="home">
      <motion.img variants={{
          hidden: { opacity: 0, y: 940 },
          visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } }
        }} src={require('../../images/se.jpg') } alt='computer background' style={{maxHeight: "88vh", paddingTop: '10px'}} />
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } }
        }}
      className='header-text'>
        <motion.h1 variants={{
          hidden: { opacity: 0, x: 900 },
          visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } }
        }}>Hi, I am Sean Siganoff.</motion.h1>
        <motion.h4 variants={{
          hidden: { opacity: 0, y: -900 },
          visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1.3 } }
         
        }}>FULL STACK SOFTWARE ENGINEER</motion.h4>
        
      
      </motion.div>
    </motion.div>
  )
}

export default Home