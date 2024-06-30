import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import html2canvas from "html2canvas";
import "./colorPalette.css";

const ColorPalette = ({ colors, onRemoveColor, onClearPalette }) => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const handleRemoveColorClick = (color) => {
    console.log("Remove color clicked:", color);
    onRemoveColor(color);
  };

  const handleExportPalette = () => {
    const paletteContainer = document.getElementById('palette-container');
    html2canvas(paletteContainer, { backgroundColor: "#FFFFFF" }).then(canvas => {
      const dataUri = canvas.toDataURL('image/jpeg');
      const exportFileDefaultName = 'color_palette.jpg';
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    });
  };

  return (
    <div className="color-palette-container">
      <div id="palette-container" className="color-palette">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-square"
            style={{ backgroundColor: color }}
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
          >
            <div className="remove-icon" onClick={() => handleRemoveColorClick(color)}>
              <MdClose />
            </div>
            {hoveredColor === color && <div className="hover-alert">Hovered</div>}
          </div>
        ))}
      </div>
      <button className="clear-palette-btn" onClick={onClearPalette}>
        Clear the palette
      </button>
      <button className="export-palette-btn" onClick={handleExportPalette}>
        Export the palette
      </button>
    </div>
  );
};

export default ColorPalette;
