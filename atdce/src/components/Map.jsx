import React, { useState } from "react";
import "./Map.css";
import conti from "../assets/conti.png";
import tounes from "../assets/tounes.png";

export default function Map() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="where-we-are">
      <div className="wrapper">
        <img
          src={conti}
          alt="map"
          className={`conti ${hovered ? "dropped-opacity" : ""}`}
        />
        <div
          className="tounes-container"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={tounes} alt="map" className="tounes" />
          {hovered && <p className="tounes-text">Tunisia North Africa</p>}
        </div>
      </div>
    </div>
  );
}
