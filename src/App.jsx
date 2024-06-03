import React, { useState, useRef } from 'react';
import './App.css';
import ColorPalette from './components/ColorPalette';
import Button from './components/Button';
import ColorText from './components/ColorText';
import Icons from './components/Icons';
import { MdClose } from 'react-icons/md';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [colorHistory, setColorHistory] = useState([]);
  const [isAnimationReversed, setIsAnimationReversed] = useState(false);
  const [isAnimationInProgress, setIsAnimationInProgress] = useState(false);
  const [squares, setSquares] = useState([]);
  const [addedColors, setAddedColors] = useState(new Set());
  const [likedColor, setLikedColor] = useState(null);
  const [showContainer, setShowContainer] = useState(false);

  const animationRef = useRef(null);

  const handlebackGroundColorChange = (color) => {
    setColorHistory(prev => [...prev, backgroundColor]);
    setBackgroundColor(color);
  };
  
  const handleUndo = () => {
    setIsAnimationReversed(true);
    if (colorHistory.length > 0) {
      const previousColor = colorHistory.pop();
      setBackgroundColor(previousColor);
      setColorHistory([...colorHistory]);
    }

    if (!isAnimationInProgress) {
      setIsAnimationInProgress(true);

      if (animationRef.current) {
        animationRef.current.style.animation = 'none';
        void animationRef.current.offsetWidth;
      }

      if (animationRef.current) {
        animationRef.current.style.animation = ' 1s ease-in-out';
      }

      setTimeout(() => {
        setIsAnimationInProgress(false);
      }, 1000);
    }
  };

  const handleLike = () => {
    if (!addedColors.has(backgroundColor)) {
      if (!showContainer) {
        setShowContainer(true);
      }

      if (addedColors.size >= 30) {
        alert("You have reached the maximum limit of favorited colors (30).");
      } else {
        const newSquare = {
          id: squares.length + 1,
          backgroundColor: backgroundColor
        };
        setSquares([...squares, newSquare]);
        setAddedColors(new Set(addedColors).add(backgroundColor));
      }
    } else {
      setLikedColor(backgroundColor);
      setTimeout(() => {
        setLikedColor(null);
      }, 1000);
    }
  };

  const handleColorClick = (color) => {
    setBackgroundColor(color);
  };

  const handleRemoveColor = (color) => {
    const updatedColors = squares.filter(square => square.backgroundColor !== color);
    setSquares(updatedColors);
    setAddedColors(new Set([...updatedColors.map(square => square.backgroundColor)]));
  };

  const clearPalette = () => {
    setSquares([]); 
  };

  return (
    <div>
      <ColorText backgroundColor={backgroundColor} />
      <Button
        currentColor={backgroundColor}
        onColorChange={handlebackGroundColorChange}
      />
      <div className="icons-container">
      <Icons
        backgroundColor={backgroundColor}
        onUndo={handleUndo}
        onLike={handleLike}
        ref={animationRef}
      />
      </div>
      <ColorPalette
        colors={[...addedColors]}
        onColorClick={handleColorClick}
        onRemoveColor={handleRemoveColor}
        onClearPalette={clearPalette}
      />
      <div className={`squares-container ${showContainer ? 'show' : 'hide'}`}>
        {squares.map((square) => (
          <div
            key={square.id}
            className={`square ${square.backgroundColor === likedColor ? 'liked transform' : ''}`}
            style={{ backgroundColor: square.backgroundColor }}
          >
            <MdClose onClick={() => handleRemoveColor(square.backgroundColor)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
