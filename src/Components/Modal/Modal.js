
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../App/App';
import { useEffect, useState, useContext } from 'react';

const Modal = ({ handleClose, text, selectedInfo}) => {
    const [projectInfo, setProjectInfo] = useContext(Context);
    const [projectURL, setProjectURL] = useState()
    const [projectName, setProjectName] = useState();
    const [projectDescription, setProjectDescription] = useState();
    const [projectGitHubURL, setProjectGitHubURL] = useState();
   
    const navigate = useNavigate();


    const changeLocation = (location) => {
        return window.location.href = location;
    }


  useEffect(() => {
    //if selected info that was passed from the projects component is true, it will set all the info for the modal
    if(selectedInfo) {
        setProjectDescription(projectInfo[0][selectedInfo].description)
        setProjectURL(projectInfo[0][selectedInfo].url)
        setProjectGitHubURL(projectInfo[0][selectedInfo].githubURL);
        setProjectName(projectInfo[0][selectedInfo].name);
    }
  }, [selectedInfo, projectInfo])
    

    //used with framer motion to make the
    const dropin = {
        hidden: {
            x: "-100vh",
            opacity: 0
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 10,
                type: "spring",
                damping: 25,
                stiffness: 500,
            }
        },
        exit: {
            x: "100vh",
            opacity: 0,
        },
    }


  return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal orange-gradient"
            variants={dropin}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className='close-container'>
                <button className='close' onClick={handleClose}>X</button>
            </div>
            <h2>{projectName}</h2>
            <br /><br />
            <p>{projectDescription}</p>
            <div className='modal-buttons-div'>
                <button onClick={() => changeLocation(projectURL)}>View Page</button>
                <button onClick={() => changeLocation(projectGitHubURL)}>View GitHub</button>
            </div>
        </motion.div>
    </Backdrop>
  )
}

export default Modal

