import React from 'react';
import Simage from './molecules/Simage';
import { Typography } from 'antd';
import './Skill.css';

import react from '../img/react.png';
import css from '../img/css.png';
import git from '../img/git.png';
import html from '../img/html.png';
import java from '../img/java.png';
import jquery from '../img/jquery.png';
import js from '../img/js.png';
import mysql from '../img/mysql.png';
import nexacro from '../img/nexacro.gif';
import oracle from '../img/oracle.png';
import proobject from '../img/proobject.png';
import spring from '../img/spring.png';
import node from '../img/node.png';

const Skill = () => {
  const { Title } = Typography;
  return (
    <div className="skill" id="s">
      <div className="skill_title">
        <Title>Skils</Title>
      </div>
      <div className="skill_Content">
        <Simage url={java} familiar="familiar" />
        <Simage url={js} familiar="familiar" />
        <Simage url={html} familiar="familiar" />
        <Simage url={jquery} familiar="familiar" />
      </div>
      <div className="skill_Content">
        <Simage url={react} familiar="familiar" />
        <Simage url={nexacro} familiar="familiar" />
        <Simage url={proobject} familiar="familiar" />
        <Simage url={spring} familiar="familiar" />
      </div>
      <div className="skill_Content">
        <Simage url={oracle} familiar="familiar" />
        <Simage url={mysql} familiar="familiar" />
        <Simage url={git} familiar="familiar" />
      </div>
      <div className="skill_title">
        <Title>try</Title>
      </div>
      <div className="skill_Content">
        <Simage url={css} familiar="try" />
        <Simage url={node} familiar="try" />
      </div>
    </div>
  );
};

export default Skill;
