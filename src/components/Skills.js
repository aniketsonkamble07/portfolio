import React from "react";
import "./Skills.css";

const skills = [
  { name: "Java", level: "90%" },
  { name: "Python", level: "85%" },
  { name: "Django", level: "80%" },
  { name: "Spring Boot", level: "75%" },
  { name: "JavaScript", level: "70%" },
  { name: "React", level: "70%" },
  { name: "MySQL", level: "85%" },
  { name: "MongoDB", level: "75%" },
];

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: skill.level }}>
                <span>{skill.level}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
