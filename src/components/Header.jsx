import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-text">
        <p
          onClick={() => {
            document.getElementById('h').scrollIntoView();
          }}
        >
          Home
        </p>
        <p
          onClick={() => {
            document.getElementById('a').scrollIntoView();
          }}
        >
          About
        </p>
        <p
          onClick={() => {
            document.getElementById('p').scrollIntoView();
          }}
        >
          Project
        </p>
        <p
          onClick={() => {
            document.getElementById('c').scrollIntoView();
          }}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default Header;
