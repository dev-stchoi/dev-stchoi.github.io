import React from 'react';
import './Bar.css';

const Bar = ({ skill, level }) => {
  const styleRules = { width: level };
  return (
    <div className="bar">
      <div className="bar_fill" style={styleRules}>
        <div className="bold">{skill}</div>
      </div>
      <span className="level">{level}</span>
    </div>
  );
};

export default Bar;
