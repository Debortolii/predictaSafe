// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Mantenha este import, mas o index.css deve ser minimalista

// REMOVA OU COMENTE ESTA LINHA:
// import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* REMOVA OU COMENTE ESTE BLOCO DO BrowserRouter: */}
    {/* <BrowserRouter> */} 
      <App />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);