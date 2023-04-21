import React from 'react'
import './Skills.css'
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
    const ref = useRef(null);
    const isInViewSkills = useInView(ref, { once: true });
    
  return (
    <div ref={ref} className='skills'>
        <h1 style={{transform: isInViewSkills ? "none" : "translatex(-1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
            SKILLS
        </h1>
        <div  className='skills-container'>
            <div className='icons-div'>
                <img src={require('../../images/jest.png')} alt="jest"  style={{transform: isInViewSkills ? "none" : "translatex(1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/GitHub-Mark-Light-120px-plus.png')} alt="github" style={{transform: isInViewSkills ? "none" : "translateY(1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/css3.png')} alt="css3" style={{transform: isInViewSkills ? "none" : "translateY(1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/git.png')} alt="git" style={{transform: isInViewSkills ? "none" : "translateY(-1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/vscode.png')} alt="vscode" style={{transform: isInViewSkills ? "none" : "translatex(1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/redux.png')} alt="redux" style={{transform: isInViewSkills ? "none" : "translatex(-1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/postgresql-logo.png')} alt="postgresql" style={{transform: isInViewSkills ? "none" : "translateY(1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/js.png')} alt="javascript" style={{transform: isInViewSkills ? "none" : "translateY(-1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 1.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/react.png')} alt="react" style={{transform: isInViewSkills ? "none" : "translatex(1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 1.8s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
                <img src={require('../../images/node.png')} alt="node" style={{transform: isInViewSkills ? "none" : "translatex(-1000px)", opacity: isInViewSkills ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} />
            </div>
            <br />
        <h3>PERN STACK ( PostgreSQL, ExpressJS, ReactJS, NodeJS ), JavaScript, HTML, CSS, Jest, Mocha, Chai, Redux, VS Code.</h3>
        <div className='skills-list'>
            <ul>
                <li>Front-End development</li><li>UI design</li><li>UX design</li> <li>cross browser compatability</li>   <li>responsive web design</li>   <li>modals</li>   <li>DOM manipulation</li>    
            </ul>
            <ul>
                <li>Back-end development</li><li>Relational database management</li> <li>Database queries</li><li>Data Analysis</li><li>CRUD Operations</li><li>RESTful APIs</li>
                <li>Authentication and Authorization</li><li>Error handling</li><li>Middleware</li> <li>Deploying</li>
            
            </ul>
            
            

            <ul>
                <li>Agile Methodologies</li><li>Web Performance Optimization</li> <li>User Experience Design</li> <li>Version Control</li><li>Debugging</li><li>Troubleshooting</li><li>Test Driven Development (TDD)</li>
            </ul> 
        </div>
         
        </div>
        
    </div>
  )
}

export default Skills