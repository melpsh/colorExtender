import React, { useState } from 'react';
import './Button.css';

const Button = () => {
    const [isActive, setIsActive] = useState(false);
    const [boxShadowColor, setBoxShadowColor] = useState('transparent');

    const handleClick = () => {
        setIsActive(true);

        const hexColor = generateHexColor();
        setBoxShadowColor(hexColor);

        setTimeout(() => {
            setIsActive(false);
        }, 3000);
    };

    const generateHexColor = () => {
        let hexColor = '#';
        const colors = ['00', '33', '66', '99', 'CC', 'FF'];
        for (let i = 0; i < 3; i++) {
            hexColor += colors[Math.floor(Math.random() * colors.length)];
        }
        return hexColor;
    };

    return (
        <div className="container">
            <button
            className={isActive ? 'pulse_btn active' : 'pulse_btn'}
            onClick={handleClick}
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
