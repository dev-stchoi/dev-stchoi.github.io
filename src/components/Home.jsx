/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const finalText = 'Developer 최승태의 포트폴리오입니다';

  const typing = () => {
    if (text.length < finalText.length) {
      setText(text + finalText[text.length]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      typing();
    }, 100);
  }, [text]);

  return (
    <div className="typer" id="h">
      <h1 className="typer-text">{text}</h1>
      <Button className="button">View my work</Button>
    </div>
  );
};

export default Home;
