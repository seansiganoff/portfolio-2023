import React, { useContext, useEffect, useState } from 'react';
import './Projects.css';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal/Modal';
import { Context } from '../App/App';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState();
  const [projectInfo, setProjectInfo] = useContext(Context);
  const [selectedInfo, setSelectedInfo] = useState();
  const [selectedProject, setSelectedProject] = useState();


  
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  

console.log(selectedProject)
  return (
    <div className='projects'>
      <h1>PROJECTS</h1>
    
    <div className='projects-inner'>
        
        <div className='projects-container'>

          <motion.div className="save-button card-div" 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() : setSelectedInfo("bugTrackerApp"), open())} >
            <img src={require('../../images/bug-tracker-thumbnail.jpg')} alt='Bug tracker app thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() : setSelectedInfo("weatherApp"), open())} >
            <img src={require('../../images/weather-app2.jpg')} alt='Weather app thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() : setSelectedInfo("rolexApp"), open())} >
            <img src={require('../../images/rolex-thumbnail.jpg')} alt='Rolex thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() :  setSelectedInfo("sudokuApp"), open())} >
            <img src={require('../../images/sudoku.jpg')} alt='Sudoku app thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() :  setSelectedInfo("bocaExpressApp"), open())} >
            <img src={require('../../images/bescreenshot.jpg')} alt='Boca express auto body thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}} 
          onClick={() =>  (modalOpen ? close() : setSelectedInfo("tetrisApp"), open())}
           >
            <img src={require('../../images/tetris-card.jpg')} alt='Tetris thumbnail' />
          </motion.div>
          <AnimatePresence
            initial={false}
          >
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} selectedInfo={selectedInfo}/>}

          </AnimatePresence>
          

          
          
          
          
          
        </div>
    </div>
    </div>
  )
}

export default Projects