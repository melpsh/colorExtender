import React from 'react';
import { FaCopy, FaUndo, FaThumbsUp } from 'react-icons/fa';
import './Icons.css'

const Icons = ({ onCopy, onUndo, onLike }) => {
    
  return (
    <div className="icons-container">
      <h1>salammmm</h1>
      <FaCopy onClick={onCopy} className="icon fa-solid fa-copy">
        <i class="fa-regular fa-copy">salam</i>
      </FaCopy>
      <FaUndo onClick={onUndo} className="icon" />
      <FaThumbsUp onClick={onLike} className="icon" />
    </div>
  );
};

export default Icons;
