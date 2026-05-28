import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav_bar">
      <div className="left">
        <a href="#home" className="nav-logo" onClick={closeMenu}>
          <span className="nav-s">S</span>
          <span className="nav-name">SACHIN</span>
        </a>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`right ${menuOpen ? "active" : ""}`}>
        <a href="#home" className="nav_items" onClick={closeMenu}>Home</a>
        <a href="#experience" className="nav_items" onClick={closeMenu}>Experience</a>
        <a href="#skills" className="nav_items" onClick={closeMenu}>Skills</a>
        <a href="#projects" className="nav_items" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="nav_items" onClick={closeMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;