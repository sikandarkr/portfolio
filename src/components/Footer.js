import React, { useState } from "react";
import '../styles/Footer.css';


const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleRemoveFooter = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <footer className="footer">
        <button className="close-btn" onClick={handleRemoveFooter}>
         <p>X</p>
        </button>
        <p>&copy; <strong>Declaration:</strong> I hereby declare that all the information mentioned above is true and I bear the responsibility for the above-mentioned particulars to the best of my knowledge and belief.</p>
      </footer>
    )
  );
};

export default Footer;
