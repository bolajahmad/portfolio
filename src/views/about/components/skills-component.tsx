import React, { useMemo } from 'react';


export const SkillComponent: React.FC = () => {
  const skills: string[] = useMemo(() => [
    'react', 'typescript', 'javascript', 'angular', 'firebase',
    'html&css'
  ], [])
  return (
    <div className="skills_container">
      <ul className="skills_list">
        <h3 className="center">skills i can offer</h3>
        {skills.map((skill, i) => (
          <li className="list_item" key={i}>
              {skill}
          </li>
        ))}
      </ul>

      <ul className="skills_list">
        <h3 className="center">couple qualities i've built</h3>
        <li>commitment</li>
        <li>collaborative</li>
        <li>enthusiastic</li>
      </ul>
    </div>
  )
}