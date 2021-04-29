import React from 'react';
import myImg from '../img/choi.jpg';
import adaptive from '../img/adaptive.png';
import goal from '../img/goal.png';
import leadership from '../img/leadership.png';
import { Typography } from 'antd';
import './About.css';

const content_title = {
  margin: '15px 0 5px 0',
  color: '#FF7F50',
};

const About = () => {
  const { Title, Text } = Typography;

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
          <Title level={4} style={content_title}>
            적응력 및 습득력
          </Title>
          <Text strong>
            SI 프로젝트를 수행하며 다양한 인프라와 기술을 경험하였습니다. 그로
            인해 빠른 적응력과 습득력을 가지고 있습니다.
          </Text>
        </div>
        <div className="strength_size">
          <div>
            <img src={leadership} className="icon" alt="leadership" />
          </div>
          <Title level={4} style={content_title}>
            리더쉽
          </Title>
          <Text strong>강점2</Text>
        </div>
        <div className="strength_size">
          <div>
            <img src={goal} className="icon" alt="goal" />
          </div>
          <Title level={4} style={content_title}>
            도전
          </Title>
          <Text strong>강점3</Text>
        </div>
      </div>
      <div className="about_layer">
        <div className="about_me_picture">
          <img src={myImg} className="hedding" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
