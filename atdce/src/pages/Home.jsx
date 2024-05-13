import React from "react";
import "../index.css";
import "./Home.css";
import HeroSection from "../components/HeroSection";
import "../components/HeroSection.css";
import HomeSection1 from "../components/HomeSection1";
import BlackSpace from "../components/BlackSpace";
import "../components/BlackSpace.css";
import WhiteSpace from "../components/WhiteSpace";
import "../components/WhiteSpace.css";
import Map from "../components/Map";
import "../components/Map.css";

import event1 from "../assets/nahj-lbousta-events.png";
import event2 from "../assets/blech-barriere-events.png";
import rec1 from "../assets/rec1.png";
import rec2 from "../assets/rec2.png";
import rec3 from "../assets/rec3.png";
import ellipse from "../assets/ellipse.png";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhiteSpace />
      <HomeSection1 />
      <BlackSpace />
      <HomeSection1 />
      <WhiteSpace />
      <BlackSpace />
      <HomeSection1 />
      <Map />

      <HomeSection1 />
      <div class="events-imgs">
        <div className="img-set">
          <img src={event2} alt="image" className="img" />
          <img src={event1} alt="image" className="img" />
        </div>
      </div>

      <div className="projects-section">
        <h2>
          <span style={{ textTransform: "uppercase", fontWeight: 400 }}>
            Discover our
          </span>{" "}
          <span style={{ textTransform: "capitalize", fontWeight: 600 }}>
            latest projects
          </span>
        </h2>
        <div className="img-sec-1">
          <img src={rec3} alt="" className="img-sec-1-div" />
        </div>
        <div className="img-sec-2">
          <img src={rec1} alt="" className="img-sec-2-div" />
          <img src={rec2} alt="" className="img-sec-2-div" />
        </div>
      </div>
      <div>
        <h2 style={{ fontWeight: 600, paddingTop: "40px" }}>
          {" "}
          What are you waiting for?{" "}
        </h2>
        <div className="partner-vid">{/* video*/}</div>
      </div>
      <div className="ellipse-div">
        <img src={ellipse} alt="" className="ellipse" />
      </div>
    </div>
  );
}
