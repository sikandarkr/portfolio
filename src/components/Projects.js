import React, { useEffect, useState, useMemo } from "react";
import '../styles/Projects.css';

const Projects = () => {
  const jsonData = useMemo(() => [
    {
      "title": "TAMM",
      "description": "TAMM is Abu Dhabi's integrated government services platform...",
      "techStack": "React Js, Node Js, Redux, Camunda, Workbench, Kibana, DLS as css framework, NonWorkbench",
      "Tools": "Jira, VS Code, GitLab, HPSM",
      "rolesResponsibilities": "worked on integrating api for the services...",
      "company": "EdgeCorporation.net"
    },
    {
      "title": "SHUTDOWNPOINT",
      "description": "SHUTTHEPOINT is an innovative e-commerce platform...",
      "techStack": "React Js, PHP, MySQL, AWS, Twillio, Redux Saga",
      "Tools": "Jira, VS Code, Git",
      "rolesResponsibilities": "Implemented user authentication using otp services...",
      "company": "EdgeCorporation.net"
    },
    // ... more projects
  ], []); // Empty dependency array to ensure the array is created only once

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProjects(jsonData);
  }, [jsonData]);

  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.techStack}</p>
          <p><strong>Tools: </strong>{project.Tools}</p>
          <p><strong>Roles & Responsibilities:</strong> {project.rolesResponsibilities}</p>
          <p><strong>Company:</strong> {project.company}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
