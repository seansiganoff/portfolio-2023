
import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../../ProjectInfo';
import React from 'react';


export const Context = React.createContext();

function App() {
  const [projectInfo, setProjectInfo] = useState([projects]);

  return (
    
    <AnimatePresence mode="wait">
      <BrowserRouter>
      <Context.Provider value={[projectInfo, setProjectInfo]}>
        <Nav />
        <Home />
        <About />
        <Projects />
        
        </Context.Provider>
      </BrowserRouter>
    </AnimatePresence>
   
    
  );
}

export default App;
