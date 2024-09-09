import React, { useEffect, useState } from "react";
import '../styles/Projects.css';

const Projects = () => {
  // JSON data defined within the same file
  const jsonData = [
    {
      "title": "TAMM",
      "description": "TAMM is Abu Dhabi's integrated government services platform designed to provide residents, businesses, and visitors with seamless access to a wide range of government services. It simplifies interactions with government entities by offering a unified digital experience, enabling users to complete various transactions, such as licensing, permits, and other administrative processes, all in one place. TAMM reflects Abu Dhabi's commitment to innovation and digital transformation, enhancing convenience and efficiency for its users.",
      "techStack": "React Js, Node Js, Redux, Camunda, Workbench, Kibana, DLS as css framework, NonWorkbench",
      "Tools": "Jira, VS Code, GitLab, HPSM",
      "rolesResponsibilities": "worked on integrating api for the services, designing of the component like Hero section,breadcrumb and more, debugging and fixing issues, enhancement in the services, authentication system, debuging on kibana for api failure",
      "company": "EdgeCorporation.net"
    },
    {
      "title": "SHUTDOWNPOINT",
      "description": "SHUTTHEPOINT is an innovative e-commerce platform that enables shopkeepers to create and manage their stores online, allowing them to sell products directly to consumers. Users can search for products either by store or directly by product name, providing flexibility in their shopping experience. One of the platform's standout features is its ability to deliver products within 24 hours of the order time, ensuring quick and efficient service.",
      "techStack": "React Js, PHP, MySQL, AWS, Twillio, Redux Saga",
      "Tools": "Jira, VS Code, Git",
      "rolesResponsibilities": "Implemented user authentication using otp services,add item to cart, delete from cart, created dashboard for enabling the admin to updated the product details, list out orders, create stores , checkout option implementation",
      "company": "EdgeCorporation.net"
    },
    {
        "title": "iPlan Tool for Pfizer (Pay Role: Innovate IQ)",
        "description": "A platform for iPlan is a one-stop web-based application that enables regulatory planners to create, review, edit, and monitor dossier submission plans across products and markets. The regulatory submission planner receives notifications on critical impacts that may occur or have occurred because of refreshing the backend data from the Pfizer systems, which has led to changes in the plan. The planner can view the impact of the changes. rule engine for efficient planning, monitoring, and tracking of submissions. In addition, iPlan enables the planner to efficiently manage constraints in the submission plan such as parallel filing restriction, dependent markets, and shared/takeout markets. Furthermore, it helps the",
        "techStack": "React JS, REDUX, Redux Saga, antd as css framework",
        "Tools": "Jira, VS Code, Git",
        "rolesResponsibilities": "implemented search functionality, sort functionality , update the plan functionality, list out dossier submission plans ,debuging and bug fixing",
        "company": "Innovate IQ(payrole), Indegene client company"
    },
    {
        "title": "GIFTICON",
        "description": "A platform for gifting from online mode to offline. A User can gift his/her friends or family a gift voucher or request a gift voucher in the form of a coupon and then He/she can go to the concerned shop and redeem the coupon with a particular gift. when user request the gift from his/her friend or relative they will get a notification, once clicked on the notification will be redirected to the particular brand and purchase the product and share the link with the requested user or else deny the request by giving any message.",
        "techStack": "React Native, REDUX, LARAVEL, Node Js, AWS",
        "Tools": "Jira, VS Code, Git",
        "rolesResponsibilities": "payment gateway integration, user Management system like authentication, notificaton system",
        "company": "Pay Role: Appiness Interactive"
    },
    {
        "title": "DRISCOLL'S",
        "description": "Driscoll's is a leading global brand specializing in fresh berries, including strawberries, raspberries, blueberries, and blackberries. The company is committed to providing high-quality, flavourful berries that are carefully grown and harvested. Driscoll's works closely with family farmers around the world to ensure that their berries meet rigorous quality standards. The platform also offers a variety of recipes, tips, and nutritional information to help consumers make the most of their berry purchases.",
        "techStack": "React Js, MuleSoft",
        "Tools": "Jira, VS Code, Git",
        "rolesResponsibilities": "worked on design liberary,created component for the design framework (sorting component, search component, filter component and more)",
        "company": "Pay Role: Appiness Interactive"
    },
    {
        "title": "Play(DECATHLON PLAY)",
        "description": "Decathlon Play is an innovative platform by Decathlon that brings the sporting community together by offering a wide range of activities, events, and fitness challenges. It allows users to discover, book, and participate in sports events and activities tailored to their interests and skill levels. With a focus on promoting an active lifestyle, Decathlon Play connects sports enthusiasts and provides opportunities for everyone to stay engaged, fit, and motivated through community-driven experiences.",
        "techStack": "Next Js, Redux, Redux Saga, Node Js, AWS, Mongo DB",
        "Tools": "Jira, VS Code, Git",
        "rolesResponsibilities": "drag and drop functionality implementation, creating designs, search play location and listing , api integration , debuging and fixing bugs",
        "company": "DECATHLON"
    },
    {
        "title": "Play(DECATHLON PLAY)",
        "description": "Decathlon Play is an innovative platform by Decathlon that brings the sporting community together by offering a wide range of activities, events, and fitness challenges. It allows users to discover, book, and participate in sports events and activities tailored to their interests and skill levels. With a focus on promoting an active lifestyle, Decathlon Play connects sports enthusiasts and provides opportunities for everyone to stay engaged, fit, and motivated through community-driven experiences.",
        "techStack": "Next Js, Redux, Redux Saga, Node Js, AWS, Mongo DB",
        "Tools": "Jira, VS Code, Git",
        "rolesResponsibilities": "drag and drop functionality implementation, creating designs, search play location and listing , api integration , debuging and fixing bugs",
        "company": "DECATHLON"
    },
    {
        "title": "OONSPORT",
        "description": "A project about connecting of athlete, trainer, sports facility, organization where they can connect with one another with message. And trainer can post ad about new requirement, as well sports centre. One sports centre can have many trainers and one trainer can have many athletes. Here user can search user on the basic of user type (athlete, trainer, sports centre).",
        "techStack": "Next Js, Redux, Redux Saga, Node Js, AWS, Mongo DB",
        "Tools": "Jira, VS Code, Git",
        "rolesResponsibilities": "Login and registration system, upload files and image and gallary section, search and filter ,inappp messaging,debugging and fixing bugs",
        "company": "Blackturtle"
    },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProjects(jsonData);
  }, []);

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
