import React from 'react';
// import Header from './components/Header';
import 'antd/dist/antd.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
