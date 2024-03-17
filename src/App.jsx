import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import ColorText from './components/ColorText';
import Icons from './components/Icons';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div>
      <ColorText backgroundColor={backgroundColor} />
      <Button onColorChange={handleColorChange} />
      <Icons></Icons>
    </div>
  );
}

export default App;