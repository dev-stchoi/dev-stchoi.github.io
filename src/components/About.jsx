import React from 'react';
import myImg from '../img/choi.jpg';
import { Typography } from 'antd';
import Bar from './molecules/Bar';
import './About.css';

const About = () => {
  const { Title } = Typography;
  const data = [
    {
      skill: 'React',
      level: '50%',
    },
    {
      skill: 'Javascript',
      level: '80%',
    },
    {
      skill: 'Java',
      level: '70%',
    },
    {
      skill: 'Oracle',
      level: '70%',
    },
    {
      skill: 'CSS',
      level: '20%',
    },
    {
      skill: 'Git',
      level: '80%',
    },
  ];

  return (
    <div className="about">
      <div className="about_me_title">
        <Title>About me</Title>
      </div>
      <div className="about_layer">
        <div className="about_me_picture">
          <img src={myImg} className="hedding" />
        </div>
        <div className="about_me_content">
          {data.map(item => (
            <Bar skill={item.skill} level={item.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
