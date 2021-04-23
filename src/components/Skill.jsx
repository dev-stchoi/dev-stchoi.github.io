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

const Skill = () => {
  const { Title } = Typography;
  return (
    <div className="skill" id="s">
      <div className="skill_title">
        <Title>Skils</Title>
      </div>
      <div className="skill_Content">
        <Simage url={java} familiar="familiar"></Simage>
        <Simage url={js} familiar="familiar"></Simage>
        <Simage url={html} familiar="familiar"></Simage>
        <Simage url={jquery} familiar="familiar"></Simage>
        <Simage url={css} familiar="familiar"></Simage>
      </div>
      <div className="skill_Content">
        <Simage url={react} familiar="familiar"></Simage>
        <Simage url={nexacro} familiar="familiar"></Simage>
        <Simage url={proobject} familiar="familiar"></Simage>
        <Simage url={spring} familiar="familiar"></Simage>
      </div>
      <div className="skill_Content">
        <Simage url={oracle} familiar="familiar"></Simage>
        <Simage url={mysql} familiar="familiar"></Simage>
        <Simage url={git} familiar="familiar"></Simage>
      </div>
    </div>
  );
};

export default Skill;
