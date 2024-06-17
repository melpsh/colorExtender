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
  const [squares, setSquares] = useState([]);
  const [addedColors, setAddedColors] = useState(() => new Set());
  const [likedColor, setLikedColor] = useState(null);
  const [showContainer, setShowContainer] = useState(false);
  const [counter, setCounter] = useState(1);
  const [colorInfo, setColorInfo] = useState("");

  const animationRef = useRef(null);

  const handlebackGroundColorChange = (color) => {
    setColorHistory(prev => [...prev, backgroundColor]);
    setBackgroundColor(color);
  };

  const handleUndo = () => {
    if (colorHistory.length > 0) {
      const previousColor = colorHistory.pop();
      setBackgroundColor(previousColor);
      setColorHistory([...colorHistory]);
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
          id: counter,
          backgroundColor: backgroundColor
        };
        setSquares(prevSquares => [...prevSquares, newSquare]);
        setAddedColors(prevColors => new Set(prevColors).add(backgroundColor));
        setCounter(prevCounter => prevCounter + 1);
      }
    } else {
      setLikedColor(backgroundColor);
      setTimeout(() => {
        setLikedColor(null);
      }, 1000);
    }
  };

  const handleRemoveColor = (color) => {
    setSquares(prevSquares => prevSquares.filter(square => square.backgroundColor !== color));
    setAddedColors(prevColors => {
      const newColors = new Set(prevColors);
      newColors.delete(color);
      return newColors;
    });
  };

  const clearPalette = () => {
    setSquares([]);
    setAddedColors(new Set());
  };

  const squareDetailsDisplay = (squareColorInfo) => {
    setColorInfo(squareColorInfo);
  }
  
  const squareDetailsHide = () => { 
    setColorInfo(null);
   }

  return (
    <div>
      <ColorText backgroundColor={backgroundColor} />
      <Button
        currentColor={backgroundColor}
        onColorChange={handlebackGroundColorChange}
        counter={counter}
        setCounter={setCounter}
      />
      <span className="icons-container">
        <Icons
          backgroundColor={backgroundColor}
          onUndo={handleUndo}
          onLike={handleLike}
          ref={animationRef}
        />
      </span>
      <ColorPalette
        colors={[...addedColors]}
        onRemoveColor={handleRemoveColor}
        onClearPalette={clearPalette}
        counter={counter}
      />
      <div className={`squares-container ${showContainer ? 'show' : 'hide'}`}>
        {squares.map((square) => (
          <div
            key={square.id}
            className={`square ${square.backgroundColor === likedColor ? 'liked transform' : ''}`}
            style={{ backgroundColor: square.backgroundColor }}
            onMouseEnter={()=> {squareDetailsDisplay(square.backgroundColor)}}
            onMouseLeave={()=> {squareDetailsHide()}}
            onClick={()=> {handlebackGroundColorChange(square.backgroundColor)}}
          >
            <MdClose className='square-delete' onClick={() => handleRemoveColor(square.backgroundColor)} />
            {colorInfo? 
            <div className='squarColorInfo'> {colorInfo} </div>
            : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
