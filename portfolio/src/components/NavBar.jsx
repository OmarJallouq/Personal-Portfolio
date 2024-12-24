import React, { useState } from "react";
import "../styles/navbar.css";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) {
      return;
    }
    setIsAnimating(true);

    setIsActive(!isActive);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <a href="#" className="nav-logo">
            Omar Jallouq
          </a>
          <div
            className={isActive ? "hamburger open" : "close hamburger"}
            onClick={handleToggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={isActive ? "open nav-menu" : "close nav-menu"}>
            <li className="nav-item" onClick={handleToggle}>
              <a
                href="#"
                className={isActive ? "open nav-link" : "close nav-link"}
              >
                Services
              </a>
            </li>
            <li className="nav-item" onClick={handleToggle}>
              <a
                href="#"
                className={isActive ? "open nav-link" : "close nav-link"}
              >
                Blog
              </a>
            </li>
            <li className="nav-item" onClick={handleToggle}>
              <a
                href="#"
                className={isActive ? "open nav-link" : "close nav-link"}
              >
                About
              </a>
            </li>
            <li className="nav-item" onClick={handleToggle}>
              <a
                href="#"
                className={isActive ? "open nav-link" : "close nav-link"}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
