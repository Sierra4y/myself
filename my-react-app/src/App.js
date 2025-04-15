import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import About from './pages/about';
import Introduction from './pages/introduction';
import Background from './pages/background';
import Skills from './pages/skills';
import Appeal from './pages/appeal';
import Portfolio from './pages/portfolio';
import Bubble from './components/bubble'

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