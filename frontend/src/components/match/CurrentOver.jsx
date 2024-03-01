import React from 'react';
import './styles/currentOver.css'

const CurrentOverDisplay = ({ currentOver }) => {
  return (
    <div className="current-over"> 
      <h3>Current Over</h3>
      <div className="over-progress">
        {currentOver.map((ball, index) => (
          <span key={index} className="ball">{ball}</span>
        ))}
      </div>
    </div>
  );
};

export default CurrentOverDisplay;