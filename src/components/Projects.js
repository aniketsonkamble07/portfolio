import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Food Ordering System",
    description: "A dynamic food ordering website using Java, JSP, and MySQL.",
    tech: ["Java", "JSP", "JDBC", "MySQL"],
    link: "https://github.com/aniketsonkamble07/Food-Ordering-System",
  },
  {
    title: "Travel Ticket Booking",
    description: "A ticket booking system with Java Servlet and JSP.",
    tech: ["Java", "Servlet", "JSP", "MySQL"],
    link: "https://github.com/aniketsonkamble07/Travel-Ticket-Booking",
  },
  {
    title: "Placement Management System",
    description: "A web-based platform for college placement activities.",
    tech: ["Django", "Python", "MySQL"],
    link: "https://github.com/aniketsonkamble07/Placement-Management-System",
  },
  {
    title: "Sign Language Learning App",
    description: "An NLP-based sign language education tool.",
    tech: ["Python", "Django", "SiGML", "React"],
    link: "https://github.com/aniketsonkamble07/Sign-Language-App",
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
