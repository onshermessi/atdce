import React from "react";
import "./HeroSec.css";

export default function HeroSec({
  title,
  subtitle,
  description1,
  description2,
  Img,
}) {
  return (
    <>
      <div className="top-grad">
        <div className="herosec-header">
          <div className="herosec-left">
            <h3> {title}</h3>
            <h4> {subtitle} </h4>
            <p> {description1}</p>
            <p> {description2}</p>
          </div>
          <div className="herosec-right">
            <img src={Img} alt="" className="herosec-img" />
          </div>
        </div>
      </div>
    </>
  );
}
