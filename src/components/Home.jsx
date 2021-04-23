import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import './Home.css';

const Home = () => {
  const [text, setText] = useState('');
  const [scroll, setScroll] = useState('');
  const [headerHide, setHeaderHide] = useState(false);
  const finalText = 'Developer 최승태의 포트폴리오입니다';

  const typing = useCallback(() => {
    if (text.length < finalText.length) {
      setText(text + finalText[text.length]);
    }
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      typing();
    }, 100);
  }, [typing]);

  const onScroll = e => {
    // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    setScroll(scrollTop);
  };

  useEffect(() => {
    // 스크롤 이벤트 적용
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (scroll > 650) {
      setHeaderHide(true);
    } else {
      setHeaderHide(false);
    }
  }, [scroll]);

  return (
    <>
      {headerHide && <Header />}
      <div className="typer" id="h">
        <h1 className="typer-text">{text}</h1>
        <button
          className="button"
          onClick={() => {
            document.getElementById('a').scrollIntoView();
          }}
        >
          View my work
        </button>
      </div>
    </>
  );
};

export default Home;
