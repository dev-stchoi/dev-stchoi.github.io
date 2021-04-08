import React from 'react';
// import Header from './components/Header';
import 'antd/dist/antd.css';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
    </>
  );
};

export default App;
