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
        <h3 className='logo'><a>Fezari</a></h3>
      </div>
      <div id="options">
        <ul className={isOpen ? "nav-links open" : "nav-links"} id="menu">
          <li><a href="#about">Hakkımızda</a></li>
          <li><a href="#services">Neler Yapıyoruz</a></li>
          <li><a href="#team">Bize Katılmak İster Misin</a></li>
          <li><a href="#contact">İletişim</a></li>
          <li>
            <div className="social-media">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
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
