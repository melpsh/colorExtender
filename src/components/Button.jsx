import React, { useState, useRef } from 'react';
import './Button.css';

const Button = ({ currentColor, onColorChange, counter, setCounter }) => {

  const handleClick = () => {
    const hexColor = generateHexColor();

    onColorChange(hexColor);
    setCounter(counter+1);

  };

  const generateHexColor = () => {
    let hexColor = '#';
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      hexColor += colors[Math.floor(Math.random() * colors.length)];
    }
    return hexColor;
  };

  return (
    <div className="container">
      <button
        className="pulse_btn"
        onClick={handleClick}
        style={{
          boxShadow: `0 0 0 100vw ${currentColor}`
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Button;
