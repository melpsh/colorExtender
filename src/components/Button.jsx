import React, { useState, useRef } from 'react';
import './Button.css';

const Button = ({ currentColor, onColorChange }) => {
    
    const [isAnimationInProgress, setIsAnimationInProgress] = useState(false);
    const animationRef = useRef(null);

  const handleClick = () => {
    if (!isAnimationInProgress) {
    setIsAnimationInProgress(true);

    const hexColor = generateHexColor();

    onColorChange(hexColor);

    
    console.log('asgharrrrrrr',animationRef)
    if (animationRef.current) {
        animationRef.current.style.animation = 'none';
        void animationRef.current.offsetWidth; 
    }

    
    if (animationRef.current) {
        animationRef.current.style.animation = 'pulse_btn 1s ease-in-out';  
    }

    setTimeout(() => {
        setIsAnimationInProgress(false);
    }, 1000); 

   }
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
        ref={animationRef}
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
