import React from 'react';
import './Simage.css';

const SImage = ({ url, familiar }) => {
  return (
    <div
      className="skill_image_container"
      style={{ backgroundImage: `url(${url})` }}
    >
      {familiar && <div className="skill_label">{familiar}</div>}
    </div>
  );
};

export default SImage;
