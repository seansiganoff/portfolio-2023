import React from 'react'
import './About.css';
import { motion } from 'framer-motion';

const About = () => {


  const visible = { opacity: 1, y: 0, transition: { duration: 2 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
  };


  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="about">
        
        <div className='about-container'>
          <motion.div variants={itemVariants} className='about-text'>
                <h1>MY JOURNEY</h1>
                <br />
                <motion.p variants={itemVariants}>
                  I fell in love with programming at the age of 12. But my family was set on me learning the family business.
                  After graduating college, I opened and operated a mechanic shop for the next 19 years. 
                  After almost 20 years of hard labor, I've decided to do something less physical, and get back to my real passion, computers.<br /><br />

                  I studied online at Codecademy.com and other resources for 1 year then, decided to attend a bootcamp at one of the best bootcamps in North America, Full-Stack Academy. 
                  After graduating, I decided to do some freelance work until the pandemic was over. And now that its over, I'm ready to start working.
            
                  <br /><br />
                  As a software engineer, I'm passionate about creating intuitive, user-friendly web applications that meet the needs of users and businesses alike.
                  And I'm committed to writing clean, maintainable, and scalable code that adheres to best practices and coding standards.

                </motion.p>
          </motion.div>
          <div className='photo-container2'>
          <img src={require('../../images/me1.jpg')} alt='project' style={{width: "100%"}}/>
        </div>
          <motion.div variants={itemVariants} className='interest-text'>
                <h1>MY INTERESTS</h1>
                <br />
                
                  <ul>
                    <li>Family</li>
                    <li>Friends</li>
                    <li>Movies</li>
                    <li>Meeting New People</li>
                    <li>Tech</li>
                    <li>Vacationing</li>
                    <li>Game Night</li>
                    <li>Comedy Shows</li>
                    <li>Fishing</li>
                    <li>Good Food</li>
                  </ul>

          </motion.div>
        </div>
        <div className='photo-container'>
          <img src={require('../../images/me1.jpg')} alt='' style={{width: "300px", height: "300px"}}/>
        </div>
        
       
    </motion.div>
  )
}

export default About