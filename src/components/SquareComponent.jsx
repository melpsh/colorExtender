import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const SquareComponent = ({
  square,
  likedColor,
  handlebackGroundColorChange,
  handleRemoveColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={square.id}
      className={`square ${square.backgroundColor === likedColor ? "liked transform" : ""}`}
      style={{ backgroundColor: square.backgroundColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => handlebackGroundColorChange(square.backgroundColor)}
    >
      <div>
        <MdClose
          className="square-delete"
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveColor(square.backgroundColor);
          }}
        />
      </div>
      {isHovered && (
        <div className="squarColorInfo">{square.backgroundColor}</div>
      )}
    </div>
  );
};

const SquaresContainer = ({
  squares,
  showContainer,
  likedColor,
  handlebackGroundColorChange,
  handleRemoveColor,
}) => {
  return (
    <div className={`squares-container ${showContainer ? "show" : "hide"}`}>
      {squares.map((square) => (
        <SquareComponent
          key={square.id}
          square={square}
          likedColor={likedColor}
          handlebackGroundColorChange={handlebackGroundColorChange}
          handleRemoveColor={handleRemoveColor}
        />
      ))}
    </div>
  );
};

export default SquaresContainer;
