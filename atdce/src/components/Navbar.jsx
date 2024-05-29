import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/atdce logo 1.png";

import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      setShowDropdown(false);
    }
  };
  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
      setShowDropdown(false);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className="containernav">
        <nav className="nav-bar">
          <div className="navbar-logo">
            <NavLink to="/">
              <img src={logo} alt="ATDCE LOGO" />
            </NavLink>
          </div>

          <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
            <ul className="nav__list">
              <div className="resp">
                <div className="nav-kbira">
                  <li className="nav__item">
                    <NavLink
                      to="/"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/events"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Events
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <div className="nav-link" onClick={toggleDropdown}>
                      Projects
                    </div>
                    <div className={`dropdown ${showDropdown ? "show" : ""}`}>
                      <NavLink
                        to="/project1"
                        className="dropdown-item"
                        onClick={closeMenuOnMobile}
                      >
                        Project1
                      </NavLink>
                      <NavLink
                        to="/project2"
                        className="dropdown-item"
                        onClick={closeMenuOnMobile}
                      >
                        Project2
                      </NavLink>
                      <NavLink
                        to="/project3"
                        className="dropdown-item"
                        onClick={closeMenuOnMobile}
                      >
                        Project3
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/partners"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Partners
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/funds"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Funds
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/impactareas"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Impact Areas
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/aboutus"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      About Us
                    </NavLink>
                  </li>
                </div>

                <div className="mini-nav">
                  <li className="nav__item">
                    <NavLink
                      to="/partnerwithus"
                      className="mini-nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Partner with Us
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/careers"
                      className="mini-nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Careers
                    </NavLink>
                  </li>
                  <li className="nav__item">
                    <NavLink
                      to="/blogs"
                      className="mini-nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Blogs
                    </NavLink>
                  </li>
                </div>
              </div>
            </ul>

            <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div>
          </div>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        </nav>
        <div className="nav-underline"></div>
      </div>
    </header>
  );
}
