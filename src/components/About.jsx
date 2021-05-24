import React from 'react';
import myImg from '../img/choi.jpg';
import adaptive from '../img/adaptive.png';
import goal from '../img/goal.png';
import communication from '../img/communication.png';
import { Typography } from 'antd';
import './About.css';

const content_title = {
  margin: '15px 0 5px 0',
  color: '#04c2c9',
};

const content_text = {
  fontSize: '1.3em',
};

const About = () => {
  const { Title, Text } = Typography;

  return (
    <div className="about" id="a">
      <div className="about_me_title">
        <Title>About me</Title>
      </div>
      <div className="about_me_layer">
        <div className="about_me_picture">
          <img src={myImg} className="hedding" alt="profile" />
        </div>
        <div className="strength_layer">
          <div className="strength_size">
            <div className="strength_img">
              <img src={adaptive} className="icon" alt="adaptive" />
              <Title level={4} style={content_title}>
                적응력 및 습득력
              </Title>
            </div>
            <Text style={content_text}>
              SI 프로젝트를 수행하며 다양한 인프라와 기술을 경험하였습니다.
              <br />
              그로인해 빠른 적응력과 습득력을 가지고 있습니다.
            </Text>
          </div>
          <div className="strength_size">
            <div className="strength_img">
              <img src={communication} className="icon" alt="communication" />
              <Title level={4} style={content_title}>
                소통
              </Title>
            </div>
            <Text style={content_text}>
              상대방에 이야기를 경청하고 <br />
              자신의 생각을 명확하게 전달합니다.
            </Text>
          </div>
          <div className="strength_size">
            <div className="strength_img">
              <img src={goal} className="icon" alt="goal" />
              <Title level={4} style={content_title}>
                책임감
              </Title>
            </div>
            <Text style={content_text}>
              주어진 업무에 책임감을 가지고 임하며 <br />
              목표달성을 위해 노력합니다.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
