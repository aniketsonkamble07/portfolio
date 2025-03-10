import React from 'react';
import './AboutMe.css';  // Importing external CSS file for styling


const AboutMe = () => {
  return (
    <section className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        Hi, I'm <span className="highlight"><b>Aniket Sonkamble</b></span>.  
        A passionate <b>software developer </b>skilled in Java, Python, and web technologies.
        I specialize in building scalable and efficient applications with a keen interest in problem-solving.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>🎓 Education</h3>
          <p>BE at PVG's COET, Pune | Diploma in Computer Engineering, Latur</p>
        </div>

        <div className="about-card">
          <h3>⚡ Skills</h3>
          <p>Java, Python, JavaScript, Spring Boot, Django, MySQL, MongoDB</p>
        </div>

        <div className="about-card">
          <h3>💼 Experience</h3>
          <p>Intern at PVGCOET Placement Cell | Developed a placement system</p>
        </div>

        <div className="about-card">
          <h3>📌 Projects</h3>
          <p>Food Ordering System, Travel Booking System, Placement Management</p>
        </div>

        <div className="about-card">
          <h3>🚀 Leadership</h3>
          <p>General Secretary of TPSA | ED-Cell Tech Team</p>
        </div>
      </div>

      <a
        href="https://linkedin.com/in/aniket-sonkamble"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-btn"
      >
        Connect on LinkedIn
      </a>
    </section>
  );
};

export default AboutMe;
