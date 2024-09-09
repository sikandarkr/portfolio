import React, { useState, useEffect } from "react";
import '../styles/Experience.css';

// JSON Data
const experienceData = [
  {
    company: "EdgeCorporation",
    description: "Edge Corporation is a global IT consulting and services company that specializes in delivering innovative technology solutions to a diverse range of industries. With a strong focus on digital transformation, Edge Corporation offers expertise in areas such as cloud computing, data analytics, enterprise software, and IT infrastructure management. The company's commitment to excellence and customer-centric approach has made it a trusted partner for businesses seeking to leverage technology for growth and efficiency.",
    duration: "8 AUGUST TO 31 DECEMBER 2021 - 6 MAY 2022 -PRESENT",
    designation: "Full-Stack Developer"
  },
  {
    company: "Innovate IQ",
    description: "Innovate IQ is a consulting firm that specializes in driving innovation and success through a range of services, including personalized coaching, dynamic workshops, and comprehensive courses. They focus on empowering individuals and organizations to achieve their goals by unlocking their full potential and inspiring transformative change. Innovate IQ's approach is characterized by a deep commitment to excellence, visionary thinking, and collaborative action, making them a trusted partner for clients across various industries (INNOVATE IQ CONSULTING) (INNOVATE IQ CONSULTING).",
    duration: "7 OCTOBER 2020 - 30 JUNE 2021",
    designation: "React Js Developer"
  },
  {
    company: "Decathlon",
    description: "Decathlon Play is an innovative platform by Decathlon that brings the sporting community together by offering a wide range of activities, events, and fitness challenges. It allows users to discover, book, and participate in sports events and activities tailored to their interests and skill levels. With a focus on promoting an active lifestyle, Decathlon Play connects sports enthusiasts and provides opportunities for everyone to stay engaged, fit, and motivated through community-driven experiences",
    duration: "19 FEBUARY 2020 TO 4 SEPTEMBER 2020",
    designation: "Full-Stack Developer"
  },
  {
    company: "Appiness Interactive",
    description: "Appiness Interactive is a digital consulting and technology company that focuses on delivering innovative solutions through web and mobile applications, UX/UI design, and digital marketing. They are known for their expertise in creating tailored digital experiences that enhance brand presence and user engagement. The company operates at the intersection of creativity and technology, helping businesses transform their digital landscape through cutting-edge strategies and solutions.",
    duration: "29 MAY 2019 TO 6 FEBUARY 2020",
    designation: "Full-Stack Developer (React Native, React Js & Node Js)"
  },
  {
    company: "Black Turtle",
    description: "Black Turtle is a consulting and staffing solutions firm. based in Bangalore, India, specializing in talent acquisition for a wide range of industries, including IT, finance, and consulting. They are known for their expertise in delivering customized recruitment solutions and have built a strong reputation for connecting top-tier talent with leading organizations.",
    duration: "21 APRIL 2018 TO 20 MAY 2019",
    designation: "Full-Stack Developer"
  },
];

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or a file
    // Here we directly use the JSON data
    setExperience(experienceData);
  }, []);

  return (
    <section className="experience">
      <h2>Experience & Education</h2>

      {experience.map((item, index) => (
        <div key={index} className="experience-item">
          <h3>{item.company}</h3>
          <p className="description">{item.description}</p>
          <p className="duration"><em>{item.duration}</em></p>
          <p className="designation">{item.designation}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
