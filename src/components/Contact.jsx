import React from 'react';
import './Contact.css';
import gitimg from '../img/gitlog.png';
import { Typography } from 'antd';

const Contact = () => {
  const { Title } = Typography;
  return (
    <div className="contact">
      {/* <h1 className="contact_hedding">CONTACT!</h1> */}
      <Title className="contact_hedding">CONTACT!</Title>
      <p className="email"> Email : littlebest17@naver.com </p>
      <a href="https://github.com/dev-stchoi?tab=repositories">
        <img src={gitimg} alt="github" className="github"></img>
      </a>
    </div>
  );
};

export default Contact;
