import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./ConnectMe.css"; // Importing external CSS

const ConnectMe = () => {
  return (
    <section className="connect-container">
      <h2 className="connect-title">Connect With Me</h2>
      <p className="connect-description">
        Feel free to reach out! Whether it's for collaboration, job opportunities, 
        or just a friendly chat, I'm happy to connect.
      </p>

      <div className="connect-links">
        <a href="https://linkedin.com/in/aniket-sonkamble" target="_blank" rel="noopener noreferrer" className="connect-card">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>

        <a href="https://github.com/aniketsonkamble07" target="_blank" rel="noopener noreferrer" className="connect-card">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>

        <a href="mailto:aniketsonkamble07@gmail.com" className="connect-card">
          <FaEnvelope className="icon" />
          <span>Email</span>
        </a>

        <a href="tel:+918007330941" className="connect-card">
          <FaPhone className="icon" />
          <span>Call Me</span>
        </a>
      </div>
    </section>
  );
};

export default ConnectMe;
