// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import Company from './Company.js';
import Rate from './Rate.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/company' element={<Company />} />
        <Route path='/rateus' element={<Rate />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
