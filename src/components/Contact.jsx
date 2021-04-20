import React from 'react';
import './Contact.css';
import gitimg from '../img/gitlog.png';
import { Typography } from 'antd';

const Contact = () => {
  const { Title } = Typography;
  return (
    <div className="contact" id="c">
      <Title className="contact_hedding">CONTACT!</Title>
      <div className="email"> Email : littlebest17@naver.com </div>
      <a href="https://github.com/dev-stchoi?tab=repositories">
        <img src={gitimg} alt="github" className="github"></img>
      </a>
    </div>
  );
};

export default Contact;
