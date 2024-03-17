import React from 'react';
import { FaCopy, FaUndo, FaThumbsUp } from 'react-icons/fa';
import './Icons.css'

const Icons = ({ onCopy, onUndo, onLike }) => {
    
  return (
    <div className="icons-container">
      <FaCopy onClick={onCopy} className="icon" />
      <FaUndo onClick={onUndo} className="icon" />
      <FaThumbsUp onClick={onLike} className="icon" />
    </div>
  );
};

export default Icons;
