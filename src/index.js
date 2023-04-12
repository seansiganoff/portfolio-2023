import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { AnimatePresence } from 'framer-motion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AnimatePresence mode="wait">
  <React.StrictMode>
      <App />
  </React.StrictMode>
  </AnimatePresence>
);

