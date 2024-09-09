import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp, FaGithub } from 'react-icons/fa';
import '../styles/Home.css';

const userData = {
  name: "Sikandar Kumar",
  role: "FullStack Developer",
  description: "I am a passionate and experienced FullStack Developer with a focus on building scalable and efficient applications. Let's connect and create something amazing together.",
  email: "royalsikandar25@gmail.com",
  phone: "+916360474553",
  whatsapp: "+916360474553",
  linkedin: "https://www.linkedin.com/in/sikandar-kumar",
  github: "https://github.com/royalsikandar",
  college: {
    name: "Corporate Institute of Science and Technology",
    location: "Madhya Pradesh, Bhopal",
    duration: "2012 - 2016"
  },
  experience: "6 years of experience in FullStack development",
  languages: ["Hindi", "English"],
  imageUrl: "https://qualitytechlab.com/image/sikandarkr.jpeg"
};

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="text-content">
          <h1>Hello, I'm <span className="highlight">{userData.name}</span></h1>
          <h2 className="role">{userData.role}</h2>
          <p className="description">{userData.description}</p>
          <div className="contact-info">
            <p><FaEnvelope className="icon" /> Email: <a href={`mailto:${userData.email}`}>{userData.email}</a></p>
            <p><FaPhoneAlt className="icon" /> Phone: {userData.phone}</p>
            <p><FaWhatsapp className="icon" /> WhatsApp: <a href={`https://wa.me/${userData.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with me</a></p>
            <p><FaGithub className="icon" /> GitHub: <a href={userData.github} target="_blank" rel="noopener noreferrer">{userData.github}</a></p>
            <p>College: <span className="college-name">{userData.college.name}</span>, {userData.college.location} <br />
              <span className="college-duration">{userData.college.duration}</span></p>
            <p>Experience: {userData.experience}</p>
            <p>Languages: {userData.languages.join(", ")}</p>
          </div>
        </div>
        <div className="image-content">
          <img src={userData.imageUrl} alt={userData.name} />
          <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="connect-btn">
            <FaLinkedin className="linkedin-icon" /> Connect with me
          </a>
        </div>
      </div>
      {/* Waving smiley with bubble text */}
      <div className="waving-smiley">
        👋
        <div className="bubble-text">Hello!</div>
      </div>
    </div>
  );
};

export default Home;
