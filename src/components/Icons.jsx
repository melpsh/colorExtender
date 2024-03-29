import React, { useState } from 'react';
import { FaCopy, FaUndo, FaHeart } from 'react-icons/fa';
import './Icons.css';

const Icons = ({ onCopy, onUndo, onLike, backgroundColor }) => {
  const [copyClicked, setCopyClicked] = useState(false);

  const handleCopy = () => {
    if (backgroundColor) {
      navigator.clipboard.writeText(backgroundColor)
        .then(() => {
          console.log('Color code copied to clipboard: ' + backgroundColor);
          setCopyClicked(true);
          setTimeout(() => setCopyClicked(false), 500);
        })
        .catch(err => console.error('Unable to copy color code: ', err));
    } else {
      console.error('Background color is not provided.');
    }
  };

  const handleUndo = () => {
    // Call the onUndo function passed from the parent component
    onUndo();
  };

  const handleLike = () => {
    // Call the onLike function passed from the parent component
    onLike();
  };

  return (
    <div className="icons-container">
      <FaCopy
        onClick={handleCopy}
        className={`icon icon-copy ${copyClicked ? 'clicked' : ''}`}
      />
      <FaUndo onClick={handleUndo} className="icon" />
      <FaHeart onClick={handleLike} className="icon" />
    </div>
  );
};

export default Icons;
