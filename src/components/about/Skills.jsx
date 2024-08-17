import React from 'react';
import SkillLevel from './SkillLevel';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 100 },
    { name: 'React', level: 0},
    { name: 'CSS', level: 90 },
  ];

  return (
    <div className='skills-container'>
      <SkillLevel skillName="ReactJS" level={70} color="linear-gradient(to right, #00c6ff, #0072ff)" />
      <SkillLevel skillName="HTML" level={100} color="linear-gradient(to right, #f7971e, #ffd200)" />
      <SkillLevel skillName="CSS" level={95} color="linear-gradient(to right, #f58524, #f92b7f)" />
      <SkillLevel skillName="JavaScript" level={80} color="linear-gradient(to right, #ffff00, #ffd700)" />
      <SkillLevel skillName="NodeJS" level={75} color="linear-gradient(to right, #00b09b, #96c93d)" />
      <SkillLevel skillName="Express" level={75} color="linear-gradient(to right, #00ff00, #006400)" />
      <SkillLevel skillName="Tailwind" level={80} color="linear-gradient(to right, #8e2de2, #4a00e0)" />
      <SkillLevel skillName="C++" level={85} color="linear-gradient(to right, #0000ff, #00008b)" />
      <SkillLevel skillName="DSA" level={80} color="linear-gradient(to right, #232526, #414345)" />
      <SkillLevel skillName="Problem Solving" level={75} color="linear-gradient(to right, #ff0000, #8b0000)"/>
    </div>
  );
};

export default Skills;
