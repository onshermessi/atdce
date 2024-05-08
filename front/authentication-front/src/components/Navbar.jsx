import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="secondary-navbar">
        <ul className="secondary-nav-menu">
          <li className="nav-item">
            <Link
              to="/partnerwithus"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Partners with us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/careers" className="nav-links" onClick={closeMobileMenu}>
              Careers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-links" onClick={closeMobileMenu}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ATDCE <i className="fab fa typo3"></i>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />{" "}
            {/*hamburger menu*/}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/aboutus"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/partnersandfunds"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Partners and Funds
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/impactareas"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Impact Areas
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
          </ul>
          {/*
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
  */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
