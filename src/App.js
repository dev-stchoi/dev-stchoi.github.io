import React from 'react';
import 'antd/dist/antd.css';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
