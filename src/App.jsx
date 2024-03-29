import React, { useState, useRef } from 'react';
import './App.css';
import Button from './components/Button';
import ColorText from './components/ColorText';
import Icons from './components/Icons';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [colorHistory, setColorHistory] = useState([]);
  const [isAnimationReversed, setIsAnimationReversed] = useState(false);
  const [isAnimationInProgress, setIsAnimationInProgress] = useState(false);
  const [squares, setSquares] = useState([]);
  const [addedColors, setAddedColors] = useState(new Set()); // Track added colors
  const [liked, setLiked] = useState(false);
  const animationRef = useRef(null);
  console.log("Ino inja barat neveshtam ta yadet nare k to cheghad talash kardi! be nice to yourself")
  const [showContainer, setShowContainer] = useState(false);

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
    // Get the last added color from colorHistory
    const lastAddedColor = colorHistory[colorHistory.length - 1];
    if (!showContainer) {
      setShowContainer(true);
    }

    if (addedColors.size >= 30) {
      alert("You have reached the maximum limit of favorited colors (30).");
    } else if (addedColors.has(lastAddedColor)) { // Check if the last added color is a duplicate
      setLiked(true);
      setTimeout(() => {
        setLiked(false);
      }, 1000);
    } else {
      const newSquare = {
        id: squares.length + 1,
        backgroundColor : backgroundColor
      };
      setSquares([...squares, newSquare]);
      setAddedColors(new Set(addedColors).add(lastAddedColor)); // Update added colors set with the last added color
    }
  };

  return (
    <div>
      <ColorText backgroundColor={backgroundColor} />
      <Button
        currentColor={backgroundColor}
        onColorChange={handlebackGroundColorChange}
      />
      <Icons
        backgroundColor={backgroundColor}
        onUndo={handleUndo}
        onLike={handleLike}
        ref={animationRef}
      />
      <div className={`squares-container ${showContainer ? 'show' : 'hide'}`}>
        {squares.map((square,index) => (
          <div
            key={square.id}
            className={`square ${index === squares.length - 1 && liked ? 'liked transform' : ''}`}
            style={{ backgroundColor: square.backgroundColor }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
