import React from 'react'
import './About.css';
import { useInView } from 'framer-motion';
import { useRef } from 'react';




const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  


  

  return (
    //motion is from framer motion. Used for transitions.
    <div className="about-section" >
        <h1 style={{transform: isInView ? "none" : "translatex(-1000px)", opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} 
        >ABOUT</h1>
        <div className='about-inner'>
          <div className='about-container' ref={ref} >
            <div className='about-text'  style={{ transform: isInView ? "none" : "translateX(-400px)", opacity: isInView ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                  <h2 style={{transform: isInView ? "none" : "translatey(1000px)", opacity: isInView ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>MY JOURNEY</h2>
                  <br />
                  <p>
                    I fell in love with programming at the age of 12 but I had already started learning the family business.
                    After graduating college, I opened and operated a mechanic shop for the next 19 years. 
                    After 19 years, I've decided to do get back to what I love doing, computers.<br /><br />

                    I started studying online at Codecademy.com, Udemy.com and other resources for about 1 year. The pandemic was still strong so I decided to attend a bootcamp. After looking into numerous bootcamps, I decided to go with the one who had to best track record, Full Stack Academy in NYC. 
                    After graduating, I decided to do some freelance work, and now I'm ready to start working.
              
                    <br /><br />
                    As a software engineer, I'm passionate about creating intuitive, user-friendly web applications that meet the needs of users and businesses alike.
                    And I'm committed to writing clean, maintainable, and scalable code that adheres to best practices and coding standards.

                  </p>
            </div>
            <div className='photo-container2'>
              <img src={require('../../images/sean.jpg')} alt='project' style={{width: "100%"}}/>
            </div>
            <div  
            className='interest-text' 
            ref={ref} //This is the on scroll effect. 
            style={{transform: isInView ? "none" : "translatey(-1000px)",opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                  <h2 style={{transform: isInView ? "none" : "translatex(1000px)", opacity: isInView ? 1 : 0, transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>MY INTERESTS</h2>
                  <br />
                    <ul>
                      <li>Family</li>
                      <li>Friends</li>
                      <li>Movies</li>
                      <li>Meeting New People</li>
                      <li>Tech</li>
                      <li>Game Night</li>
                      <li>Comedy Shows</li>
                      <li>Fishing</li>
                      <li>Good Food</li>
                      <li>Puzzles</li>
                      <li>Trying New Things</li>
                    </ul>
                    
            </div>
            <div className='photo-container' >
                      <img src={require('../../images/sean.jpg')} alt='' style={{width: "300px", height: "300px"}}/>
                    </div>
          </div>
        </div>
      </div>
  )
}

export default About