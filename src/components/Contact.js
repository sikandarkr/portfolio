import React from "react";
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>
        I’m always open to discussing new projects or opportunities. Feel free to get in touch with me!
      </p>
      <ul>
        <li>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourusername</a></li>
        <li>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></li>
      </ul>
    </section>
  );
};

export default Contact;
