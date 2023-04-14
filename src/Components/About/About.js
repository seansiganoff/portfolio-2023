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
        <h1>ABOUT</h1>
        <div className='about-inner'>
          <div className='about-container'>
            <motion.div variants={itemVariants} className='about-text'>
                  <h2>MY JOURNEY</h2>
                  <br />
                  <motion.p variants={itemVariants}>
                    I fell in love with programming at the age of 12. But my family was set on me learning the family business.
                    After graduating college, I opened and operated a mechanic shop for the next 19 years. 
                    After almost 20 years, I've decided to do get back to what I love doing, computers.<br /><br />

                    I started studying online at Codecademy.com, Udemy.com and other resources for 1 year. The pandemic was still strong so I decided to attend a bootcamp. After looking into numerous bootcamps, I decided to go with the one who had to best track record, Full Stack Academy in NYC. 
                    After graduating, I decided to do some freelance work. And now I'm ready to start working.
              
                    <br /><br />
                    As a software engineer, I'm passionate about creating intuitive, user-friendly web applications that meet the needs of users and businesses alike.
                    And I'm committed to writing clean, maintainable, and scalable code that adheres to best practices and coding standards.

                  </motion.p>
            </motion.div>
            <div className='photo-container2'>
              <img src={require('../../images/me1.jpg')} alt='project' style={{width: "100%"}}/>
            </div>
            <motion.div variants={itemVariants} className='interest-text'>
                  <h2>MY INTERESTS</h2>
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
                    <div className='photo-container'>
              <img src={require('../../images/me1.jpg')} alt='' style={{width: "300px", height: "300px"}}/>
            </div>
            </motion.div>
            
          </div>
        </div>
      </motion.div>
  )
}

export default About