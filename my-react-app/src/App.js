import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import bubble from "./images/bubble.png"

import Navbar from './components/navbar';
import About from './pages/about';
import Introduction from './pages/introduction';
import Background from './pages/background';
import Skills from './pages/skills';
import Appeal from './pages/appeal';
import Portfolio from './pages/portfolio';

const App = () => {
  return (
    <div className="App">
      <div className="background-bubbles">
        <img src={bubble} className="bubble bubble1" alt="bubble"/>
        <img src={bubble} className="bubble bubble2" alt="bubble"/>
        <img src={bubble} className="bubble bubble3" alt="bubble"/>
        <img src={bubble} className="bubble bubble4" alt="bubble"/>
        <img src={bubble} className="bubble bubble5" alt="bubble"/>
        <img src={bubble} className="bubble bubble6" alt="bubble"/>
        <img src={bubble} className="bubble bubble7" alt="bubble"/>
        <img src={bubble} className="bubble bubble7" alt="bubble"/>
        <img src={bubble} className="bubble bubble8" alt="bubble"/>
        <img src={bubble} className="bubble bubble9" alt="bubble"/>
        <img src={bubble} className="bubble bubble10" alt="bubble"/>
      </div>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/background" element={<Background />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/appeal" element={<Appeal />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;