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
import { useState, useRef } from 'react';
import './App.css';
import Button from './components/Button';
import ColorText from './components/ColorText';
import Icons from './components/Icons';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');
  const [colorHistory, setColorHistory] = useState([]);
  const [isAnimationReversed, setIsAnimationReversed] = useState(false);
  const [isAnimationInProgress, setIsAnimationInProgress] = useState(false);
  const animationRef = useRef(null);
  
  const handlebackGroundColorChange = (color) => {
    setColorHistory(prev => [...prev, backgroundColor]); // Store the previous color
    setBackgroundColor(color);
  };

  const handleUndo = () => {
    // Reverse animation
    setIsAnimationReversed(true);
    // After a brief delay, change color and revert animation direction
      if (colorHistory.length > 0) {
        const previousColor = colorHistory.pop(); // Get the last color from history
        setBackgroundColor(previousColor); // Revert to the previous color
        setColorHistory([...colorHistory]); // Update the color history stack
      }
      // setIsAnimationReversed(false);

    if (!isAnimationInProgress) {
      setIsAnimationInProgress(true);
  
      // Clear any existing animation
      if (animationRef.current) {
          animationRef.current.style.animation = 'none';
          void animationRef.current.offsetWidth; // Trigger reflow
      }
  
      // Start new animation
      if (animationRef.current) {
          animationRef.current.style.animation = ' 1s ease-in-out';  
      }
  
      // Enable the button after animation duration
      setTimeout(() => {
          setIsAnimationInProgress(false);
      }, 1000); // Match the animation duration
     }
  };

  const handleLike = () => {
    // Implement like functionality here
    console.log('Like clicked');
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
    </div>
  );
}

export default App;