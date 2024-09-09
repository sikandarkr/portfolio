import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const nav = document.querySelector('.nav');
      const menuToggle = document.querySelector('.menu-toggle');
      if (menuOpen && nav && !nav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span><img src="https://qualitytechlab.com/image/sikandarkr.jpeg" alt="Profile" height="40px" width="40px" /></span>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {['/', '/skills', '/projects', '/experience'].map((path, index) => (
              <li key={index}>
                <Link 
                  to={path} 
                  className={location.pathname === path ? 'active' : ''} 
                  onClick={closeMenu}
                >
                  {path.replace('/', '') || 'Home'}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
