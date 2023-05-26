import React, { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
<nav className="navbar">
  <div id="logo">
    <h3 className='logo'><a href="/">FezariTech</a></h3>
  </div>
  <div id="options">
    <ul className={isOpen ? "nav-links open" : "nav-links"} id="menu">
      <li><a href="#about">Hakkımızda</a></li>
      <li><a href="#services">Neler Yapıyoruz?</a></li>
      <li><a href="#open-positions">Bize Katılmak İster misiniz?</a></li>
      <li><a href="#contact">İletişim</a></li>
      <li>
        <div className="social-media">
          <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
          <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
      </li>
    </ul>
    <div id="menu-toggle" onClick={toggleMenu}>
      <div className={isOpen ? "open" : ""}></div>
      <div className={isOpen ? "open" : ""}></div>
      <div className={isOpen ? "open" : ""}></div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
