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
          setTimeout(() => setCopyClicked(false), 500); // Reset animation after 500ms
        })
        .catch(err => console.error('Unable to copy color code: ', err));
    } else {
      console.error('Background color is not provided.');
    }
  };

  return (
    <div className="icons-container">
      <FaCopy
        onClick={handleCopy}
        className={`icon icon-copy ${copyClicked ? 'clicked' : ''}`}
      />
      <FaUndo onClick={onUndo} className="icon" />
      <FaHeart onClick={onLike} className="icon" />
    </div>
  );
};

export default Icons;
