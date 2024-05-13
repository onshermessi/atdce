import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/atdce logo 1.png";

import { IoClose, IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  return (
    <header>
      <div className="containernav">
        <nav className="nav-bar">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logo} alt="ATDCE LOGO" />
            </Link>
          </div>

          <div className={`nav__menu ${showMenu ? "show-menu" : ""}`}>
            <ul className="nav__list">
              <div className="resp">
                <div className="nav-kbira">
                  <li className="nav__item">
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      to="/events"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Events
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      to="/projects"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Projects
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      to="/partnersandfunds"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Partners And Funds
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      to="/impactareas"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Impact Areas
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      to="/aboutus"
                      className="nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      About Us
                    </Link>
                  </li>
                </div>

                <div className="mini-nav">
                  <li className="nav__item">
                    <Link
                      to="/partnerwithus"
                      className="mini-nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Partner with Us
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      to="/careers"
                      className="mini-nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="nav__item">
                    <Link
                      to="/blogs"
                      className="mini-nav-link"
                      onClick={closeMenuOnMobile}
                    >
                      Blogs
                    </Link>
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
      </div>
    </header>
  );
}
