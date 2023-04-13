import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className='skills'>
        <h1>SKILLS</h1>
        <div className='skills-container'>
            <div className='icons-div'>
                <img src={require('../../images/jest.png')} alt="jest"  />
                <img src={require('../../images/GitHub-Mark-Light-120px-plus.png')} alt="github" />
                <img src={require('../../images/css3.png')} alt="css3" />
                <img src={require('../../images/git.png')} alt="git" />
                <img src={require('../../images/vscode.png')} alt="vscode" />
                <img src={require('../../images/redux.png')} alt="redux" />
                <img src={require('../../images/postgresql-logo.png')} alt="postgresql" />
                <img src={require('../../images/js.png')} alt="javascript" />
                <img src={require('../../images/react.png')} alt="react" />
                <img src={require('../../images/node.png')} alt="node" />
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