import React, { useState, useRef } from 'react';
import './Button.css';

const Button = ({onColorChange}) => {
    const [boxShadowColor, setBoxShadowColor] = useState('transparent');
    const [isAnimationInProgress, setIsAnimationInProgress] = useState(false);
    const animationRef = useRef(null);

    const handleClick = () => {
        if (!isAnimationInProgress) {
            setIsAnimationInProgress(true);

            const hexColor = generateHexColor();
            setBoxShadowColor(hexColor);

            onColorChange(hexColor);

            // Clear any existing animation
            if (animationRef.current) {
                animationRef.current.style.animation = 'none';
                void animationRef.current.offsetWidth; // Trigger reflow
            }

            // Start new animation
            if (animationRef.current) {
                animationRef.current.style.animation = 'pulse_btn 1s infinite';
            }

            // Enable the button after animation duration
            setTimeout(() => {
                setIsAnimationInProgress(false);
            }, 1000); // Match the animation duration
        }
    };

    const handleAnimationIteration = () => {
        // Update background color after each animation iteration
        document.body.style.backgroundColor = boxShadowColor;
    };

    const generateHexColor = () => {
        let hexColor = '#';
        const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
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
                onAnimationIteration={handleAnimationIteration}
                // disabled={isAnimationInProgress}
                style={{
                    boxShadow: `0 0 0 100vw ${boxShadowColor}`
                }}
            >
                Change Color
            </button>
        </div>
    );
}

export default Button;
