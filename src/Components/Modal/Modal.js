
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';
import { Link } from 'react-router-dom';
import { Context } from '../App/App';
import { useEffect, useState, useContext } from 'react';

const Modal = ({ handleClose, text, selectedInfo}) => {
  const [projectInfo, setProjectInfo] = useContext(Context);
  const [url, setUrl] = useState()
  const [imgUrl, setImgUrl] = useState();
  const [description, setDescription] = useState();
  const [gitHubURL, setGitHubURL] = useState();
   
    




  useEffect(() => {
    //if selected info that was passed from the projects component is true, it will set all the info for the modal
    if(selectedInfo) {
        setImgUrl(projectInfo[0][selectedInfo].imgUrl); 
        setDescription(projectInfo[0][selectedInfo].description)
        setUrl(projectInfo[0][selectedInfo].url)
        setGitHubURL(projectInfo[0][selectedInfo].githubURL);
    }
  }, [selectedInfo, projectInfo])
    


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
            <img src={imgUrl} style={{ aspectRatio: "3/2", borderRadius: '30px', boxShadow: "0px 0px 10px 0px white"}} alt='Tetris thumbnail' /><br /><br />
            <p>{description}</p>
            <div className='modal-buttons-div'>
                <button className='view-buttons'><Link to={url}>View</Link></button> 
                <button className='view-buttons'><Link to={gitHubURL}>GitHub</Link></button>
            </div>
        </motion.div>
    </Backdrop>
  )
}

export default Modal

