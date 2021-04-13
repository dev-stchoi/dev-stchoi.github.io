import React from 'react';
// import Header from './components/Header';
import 'antd/dist/antd.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
