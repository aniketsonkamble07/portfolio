import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Aniket <span>Sonkamble</span>
        </Link>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>

        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
