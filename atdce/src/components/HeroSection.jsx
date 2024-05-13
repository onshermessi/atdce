import React from "react";
import boublichange from "../assets/boublichange.png";
import khazna from "../assets/khazna 1.png";
import car2 from "../assets/car2 1.png";
export default function HeroSection() {
  return (
    <div className="hero-grad">
      <hero className="herosection-container">
        <div className="herosection-top">
          <div className="herosection-top-left">
            <h2> Empowering Youth</h2>
            <h3> Transforming Digital Culture </h3>
            <p>
              We aim to uplift marginalized voices and drive positive change in
              the digital sphere. Join us on this journey towards a more
              inclusive and vibrant digital landscape, made possible through our
              various projects.
            </p>
            <h1>
              <span style={{ fontWeight: "lighter" }}> Discover our</span>
              <span style={{ fontWeight: 620 }}> achievements</span>
            </h1>
            <div className="hero-numbers">
              <p> +60 </p>
              <p> +60 </p>
              <p> +60 </p>
            </div>
            <div className="hero-titles">
              <p> Partners </p>
              <p> Projects </p>
              <p> Events </p>
            </div>
          </div>
          <div className="herosection-top-right">
            <img src={boublichange} alt="gif" />
          </div>
        </div>
        <hr></hr> {/* separate */}
        <div className="herosection-bottom">
          <div className="img-cont">
            <div className="img-text">
              <span
                style={{ fontFamily: "Playfair Display", fontWeight: "500" }}
              >
                Using The Past
              </span>
              <br></br>
              <span style={{ fontWeight: "light" }}>To Shape The Future</span>
            </div>
            <img src={car2} alt="caritem" />
          </div>
          <img src={khazna} alt="caritem" />
        </div>
      </hero>
    </div>
  );
}
