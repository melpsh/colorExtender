import React, { useState } from "react";
import "./colorPalette.css";
import { MdClose } from "react-icons/md";

const ColorPalette = ({ colors, onRemoveColor, onClearPalette }) => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const handleRemoveColorClick = (color) => {
    console.log("Remove color clicked:", color);
    onRemoveColor(color);
  };

  return (
    <div className="color-palette">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color-square"
          style={{ backgroundColor: color }}
        >
          <div
            className="remove-icon"
            onClick={() => handleRemoveColorClick(color)}
          >
            <MdClose />
          </div>
          {hoveredColor === color && <div className="hover-alert">Hovered</div>}
        </div>
      ))}
      <button className="clear-palette-btn" onClick={onClearPalette}>
        Clear the palette
      </button>
    </div>
  );
};

export default ColorPalette;
