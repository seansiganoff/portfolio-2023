import React, { useEffect, useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';







const Home = () => {
    const [offSetY, setOffSetY] = useState(0);
    const handleScroll = () => setOffSetY(window.scrollY);

  
  //this calculates the scroll so it can be added to the header background for a parallax effect.
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])




  //Animates the header text on page load "HI, I am Sean Siganoff"
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
    const itemVariants = {
      hidden: { opacity: 0, y: -710 },
      visible
    };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="header">
          {/* animated header name  */}
          <motion.h1 variants={itemVariants} className='h header-text'>H</motion.h1>
          <motion.h1 variants={itemVariants} className='i header-text'>i, </motion.h1>

          <motion.h1 variants={itemVariants} className='I header-text'>I </motion.h1>

          <motion.h1 variants={itemVariants} className='a header-text'>a </motion.h1>
          <motion.h1 variants={itemVariants} className='m header-text'>m </motion.h1>

          <motion.h1 variants={itemVariants} className='s header-text'>s </motion.h1>
          <motion.h1 variants={itemVariants} className='e header-text'>e </motion.h1>
          <motion.h1 variants={itemVariants} className='A header-text'>a </motion.h1>
          <motion.h1 variants={itemVariants} className='n header-text'>n </motion.h1>

          <motion.h1 variants={itemVariants} className='S header-text'>s </motion.h1>
          <motion.h1 variants={itemVariants} className='ii header-text'>i </motion.h1>
          <motion.h1 variants={itemVariants} className='g header-text'>g </motion.h1>
          <motion.h1 variants={itemVariants} className='aa header-text'>a </motion.h1>
          <motion.h1 variants={itemVariants} className='N header-text'>n </motion.h1>
          <motion.h1 variants={itemVariants} className='o header-text'>o </motion.h1>
          <motion.h1 variants={itemVariants} className='f header-text'>f </motion.h1>
          <motion.h1 variants={itemVariants} className='F header-text'>f </motion.h1>

          {/* Parallax bacground text for header */}
          <h1 className='software-text' style={{transform: `translateY(${offSetY * 1.4}px)`}}>SOFTWARE ENGINEER</h1>
          <h1 className='developer' style={{transform: `translateY(${offSetY * 2}px)`}}>DEVELOPER</h1>
          <h1 className='full-stack' style={{transform: `translateY(${offSetY * 1.8}px)`}}>FULL-STACK</h1>
          <h1 className='front-end' style={{transform: `translateY(-${offSetY * 0.4}px)`}}>FRONT-END</h1>
          <h1 className='back-end' style={{transform: `translateY(-${offSetY * 1.8}px)`}}>BACK-END</h1>
    </motion.div>

  )
}

export default Home