import React, { useEffect, useState } from 'react';
import './SkillLevel.css';

const SkillLevel = ({ skillName, level, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className='water-container' onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className='hover-icon'>Hover Me</div>
      <div className='water-level' style={{ height:hovered ? `${level}%` : '0%', background: color }}>
        <div className='water-flow'></div>
        <div className='water-overlay'></div>
      </div>
      <div className='container-label'>
        {skillName}
        <span> ({level}%)</span>
      </div>
    </div>
  );
};

export default SkillLevel;
