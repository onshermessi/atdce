import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import logo from "../assets/atdce logo 2.png";
import fb from "../assets/icons8-facebook-96.png";
import ig from "../assets/icons8-instagram-96.png";
import yt from "../assets/icons8-youtube-logo-100.png";
import linkedin from "../assets/icons8-linkedin-100.png";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <footer className="footer-container">
        <section className="footer-left">
          <div className="container1">
            <img src={logo} alt="atdce logo" className="footer-logo"></img>
          </div>

          <div className="container2">
            <p className="inter">
              The ATDCE, or Tunisian Association for the Development of
              Electronic Culture, officially formed in 2019, operates under the
              name "Best Of Three" or "BO3." It's a gamer community founded in
              2018, primarily made up of Gen Y and Z.
            </p>
            <div className="lists">
              <div className="list">
                <Link to="/" className="footer-link">
                  Home
                </Link>

                <Link to="/events" className="footer-link">
                  Events
                </Link>

                <Link to="/projects" className="footer-link">
                  Projects
                </Link>

                <Link to="/impactarea" className="footer-link">
                  Impact Areas
                </Link>

                <Link to="/aboutus" className="footer-link">
                  About Us
                </Link>
              </div>
              <div className="list">
                <Link to="/careers" className="footer-link">
                  Work with Us
                </Link>

                <Link to="/" className="footer-link">
                  Employee Access
                </Link>

                <Link to="/" className="footer-link">
                  Partners And Funds
                </Link>
              </div>
              <div className="list">
                <p className="bold">Old Post Office Street</p>
                <p className="gray-out">
                  Q5XG+QJC، 14 Rue De L'ancienne Poste, Tunis 1000
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="separate"></div>

        <section className="footer-right">
          <div className="footer-right-title">
            <h3>Stay Connected</h3>
            <p> Never Miss Out: Get Event Updates Straight to Your Inbox! </p>
          </div>
          <div className="footer-subscribe">
            <form className="newsletter">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline"> Sign Up </Button>
            </form>
          </div>
          <p className="p-margin">
            Don't miss out on the latest events and exclusive updates! By not
            signing up, you risk losing access to exciting events, exclusive
            content, and insider information. Stay connected and be part of the
            action! Sign up now to stay in the loop.
          </p>
          <div className="socials-icons">
            <img src={fb} alt="fb" />
            <img src={ig} alt="ig" />
            <img src={linkedin} alt="linkedin" />
            <img src={yt} alt="yt" />
          </div>
        </section>
      </footer>
    </>
  );
}
