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
                  <h2 style={{transform: isInView ? "none" : "translatey(1000px)", opacity: isInView ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                    MY PROFESSION
                    </h2>
                  <br />
                  <p>
                  As a software engineer specializing in the PERN stack. I have a passion for building robust, scalable web applications that provide seamless user experiences.
                  My expertise lies in using PostgreSQL, Express.js, React, and Node.js to create dynamic and responsive applications.<br /> <br />

                  I am a self-starter, with a strong sense of ownership and accountability. <br />
                  I believe in taking a proactive approach to problem-solving, and I am always looking for new and innovative ways to improve the performance and functionality of my applications. <br />
                  My attention to detail and ability to work collaboratively make me a valuable asset to any team.<br /><br />

                  In addition to my technical skills, I am a great communicator and a reliable team player.
                  I believe in fostering a positive and collaborative work environment, and I am always willing to lend a helping hand to my colleagues.
                  I take pride in delivering high-quality work that exceeds expectations and meets the needs of the end-users.<br /><br />

                  In this portfolio, you will find a selection of my most recent and noteworthy projects. <br />
                  Each project showcases my skills in the PERN stack and highlights my ability to create innovative and user-friendly applications.
                  I hope that my portfolio will give you a better sense of my skills and expertise as a software engineer and demonstrate my ability to deliver results that exceed expectations.
                  Thank you for taking the time to review my portfolio, and I look forward to the opportunity to work with you in the future.


                  </p>
            </div>
            <div className='photo-container2'>
              <img src={require('../../images/sean.jpg')} alt='project' style={{width: "100%"}}/>
            </div>
            <div  
            className='interest-text' 
            ref={ref} //This is the on scroll effect. 
            style={{transform: isInView ? "none" : "translatey(-1000px)",opacity: isInView ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                  <h2 style={{transform: isInView ? "none" : "translatex(1000px)", opacity: isInView ? 1 : 0, transition: "all 3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                    MY INTERESTS
                  </h2>
                  <br />
                    <p>
                    I enjoy staying active and participating in various sports and outdoor activities. 
                    Whether it's hiking or playing team sports, I believe that staying active is crucial to maintaining a healthy body and mind. 
                    I find that physical activity is an excellent way to recharge my creativity and energy, allowing me to approach my work with a fresh perspective.
                    <br /><br />
                    I also enjoy reading and staying up-to-date on the latest trends and technologies in software engineering. 
                    I believe that continuous learning is essential to staying relevant and effective as a software engineer. 
                    By keeping up with new developments and approaches, I can continue to improve my skills and stay ahead of the curve.
                    <br /><br />
                    Overall, I believe that having diverse interests and experiences is crucial to being an effective software engineer. 
                    By drawing inspiration and lessons from a variety of sources, I can approach my work with a fresh perspective and deliver innovative and user-friendly applications.
                    </p>
                    
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