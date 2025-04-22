import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import About from './pages/about';
import Profile from './pages/profile';
import Skills from './pages/skills';
import Appeal from './pages/appeal';
import Portfolio from './pages/portfolio';
import Bubble from './components/bubble';
import HeaderContent from './components/headercontent';

const App = () => {
  const bubbles = [
    "bubble1", "bubble2", "bubble3", "bubble4", "bubble5",
    "bubble6", "bubble7", "bubble8", "bubble9", "bubble10"
  ];
  return (
    <div className="App">
      <div className="background-bubbles">
        {bubbles.map((b, i) => (
          <Bubble key={i} className={`bubble ${b}`} />
        ))}
      </div>
      <BrowserRouter>
        <>
          <div className="header-wrapper">
            <Navbar />
            <HeaderContent />
          </div>
          <div className="body-wrapper">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/appeal" element={<Appeal />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </div>
  );
};

export default App;