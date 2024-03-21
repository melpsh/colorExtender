// import { useState } from 'react';
// import './App.css';
// import Button from './components/Button';
// import ColorText from './components/ColorText';
// import Icons from './components/Icons';

// function App() {
//   const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
//   const [colorHistory, setColorHistory] = useState([]);
  
//   const handleColorChange = (color) => {
//     setColorHistory(prev => [...prev, backgroundColor]); // Store the previous color
//     setBackgroundColor(color);
//   };

//   const handleUndo = () => {
//     if (colorHistory.length > 0) {
//       const previousColor = colorHistory.pop(); // Get the last color from history
//       setBackgroundColor(previousColor); // Revert to the previous color
//       setColorHistory([...colorHistory]); // Update the color history stack
//     }
//   };

//   const handleLike = () => {
//     // Implement like functionality here
//     console.log('Like clicked');
//   };

//   return (
//     <div>
//       <ColorText backgroundColor={backgroundColor} />
//       <Button 
//         onColorChange={handleColorChange} 
//         />
//       <Icons
//         backgroundColor={backgroundColor}
//         onUndo={handleUndo}
//         onLike={handleLike}
//       />
//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------------

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
    if (addedColors.size >= 30) {
      alert("You have reached the maximum limit of favorited colors (30).");
    } else if (addedColors.has(backgroundColor)) {
      setLiked(true);
      setTimeout(() => {
        setLiked(false);
      }, 1000);
    } else {
      const newSquare = {
        id: squares.length + 1,
        backgroundColor: backgroundColor
      };
      setSquares([...squares, newSquare]);
      setAddedColors(new Set(addedColors).add(backgroundColor)); // Update added colors set
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
      <div className="squares-container">
        {squares.map(square => (
          <div
            key={square.id}
            className={`square ${liked ? 'liked transform' : ''}`}
            style={{ backgroundColor: square.backgroundColor }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
