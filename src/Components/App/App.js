
import './App.css';
import Nav from '../Nav/Nav';
import About from '../About/About';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../Projects/Projects';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../../ProjectInfo';
import React from 'react';
import Skills from '../Skills/Skills';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


export const Context = React.createContext();

function App() {
  const [projectInfo, setProjectInfo] = useState([projects]);

  return (
    
    <AnimatePresence mode="wait">
      <BrowserRouter>
      <Context.Provider value={[projectInfo, setProjectInfo]}>
        <Nav />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </Context.Provider>
      </BrowserRouter>
    </AnimatePresence>
   
    
  );
}

export default App;
