import React from 'react';
import myImg from '../img/choi.jpg';
import adaptive from '../img/adaptive.png';
import goal from '../img/goal.png';
import teamwork from '../img/teamwork.png';
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
    <div className="about" id="a">
      <div className="about_me_title">
        <Title>About me</Title>
      </div>
      <div className="strength_layer">
        <div className="strength_size">
          <div>
            <img src={adaptive} className="icon" alt="adaptive" />
          </div>
          <div>강점1</div>
        </div>
        <div className="strength_size">
          <div>
            <img src={teamwork} className="icon" alt="teamwork" />
          </div>
          <div>강점2</div>
        </div>
        <div className="strength_size">
          <div>
            <img src={goal} className="icon" alt="goal" />
          </div>
          <div>강점3</div>
        </div>
      </div>
      <div className="about_layer">
        <div className="about_me_picture">
          <img src={myImg} className="hedding" alt="profile" />
        </div>
        {/* <div className="about_me_content">
          {data.map((item, idx) => (
            <Bar skill={item.skill} level={item.level} key={idx} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default About;
