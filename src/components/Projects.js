import React, { useEffect, useState } from "react";
import '../styles/Projects.css';

// JSON data defined outside the component
const jsonData = [
  {
    "title": "TAMM",
    "description": "TAMM is Abu Dhabi's integrated government services platform...",
    "techStack": "React Js, Node Js, Redux, Camunda, Workbench, Kibana, DLS as css framework, NonWorkbench",
    "Tools": "Jira, VS Code, GitLab, HPSM",
    "rolesResponsibilities": "worked on integrating api for the services...",
    "company": "EdgeCorporation.net"
  },
  // other projects...
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProjects(jsonData);
  }, []); // Now, the dependency array is empty

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
