import React, {  useState } from 'react';
import './Projects.css';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../Modal/Modal';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState();// sets the modal to open or close
  const [selectedInfo, setSelectedInfo] = useState();//sets the info for the project that is selected
  const ref = useRef(null);
  const isInViewProjects = useInView(ref, { once: true });


  //model setters
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  

  return (
    <div ref={ref} className='projects'>
    <h1 style={{transform: isInViewProjects ? "none" : "translatex(-1000px)", opacity: isInViewProjects ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
      PROJECTS
    </h1>
    <div  className='projects-inner'>
        <div style={{transform: isInViewProjects ? "none" : "translatex(1000px)", opacity: isInViewProjects ? 1 : 0, transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className='projects-container'>
          {/* Motion divs are for the modal */}
          <motion.div className="save-button card-div" 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() : setSelectedInfo("bugTrackerApp"), open())} >
            <img src={require('../../images/bug-tracker-thumbnail.jpg')} alt='Bug tracker app thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() : setSelectedInfo("weatherApp"), open())} >
            <img src={require('../../images/weather-app2.jpg')} alt='Weather app thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() : setSelectedInfo("rolexApp"), open())} >
            <img src={require('../../images/rolex-thumbnail.jpg')} alt='Rolex thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() :  setSelectedInfo("bocaExpressApp"), open())} >
            <img src={require('../../images/bescreenshot.jpg')} alt='Boca express auto body thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileTap={{scale: 0.9}} 
          onClick={() => (modalOpen ? close() :  setSelectedInfo("sudokuApp"), open())} >
            <img src={require('../../images/sudoku.jpg')} alt='Sudoku app thumbnail' />
          </motion.div>

          <motion.div className="save-button card-div" 
          whileTap={{scale: 0.9}} 
          onClick={() =>  (modalOpen ? close() : setSelectedInfo("tetrisApp"), open())} >
            <img src={require('../../images/tetris-card.jpg')} alt='Tetris thumbnail' />
          </motion.div>
          <AnimatePresence
            initial={false}
          >
            {/* if modal is open it renders the modal and passes props for the correct project to be displayed */}
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} selectedInfo={selectedInfo}/>}

          </AnimatePresence>
          

          
          
          
          
          
        </div>
    </div>
    </div>
  )
}

export default Projects