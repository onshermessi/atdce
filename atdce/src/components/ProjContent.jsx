import React from "react";
import "./ProjHeroSection.css";

import fb1 from "../assets/blackfb.png";
import ig1 from "../assets/blackig.png";
import gray from "../assets/gray1.png";
import selket from "../assets/selket.png";

export default function ProjContent({
  title,
  subtitle,
  description,
  subtitle2,
  description2,
  highlights,
  projectimg,
  numbers,
  events,
  socialImages,
  socialNumbers,
  Img,
  recImg,
  latestProjectsDescription,
  latestProjectsImg,
  imgg,
}) {
  return (
    <>
      <header className="hero-grad">
        <div className="container-header">
          <img src={projectimg} alt="proj-img" className="proj-img" />
          <div className="border-big"></div>
          <div className="header1">
            <div className="hero-numbers1">
              {numbers.map((number, index) => (
                <p key={index}> {number}</p>
              ))}
            </div>
            <div className="hero-titles1">
              {highlights.map((highlight, index) => (
                <p key={index}>{highlight} </p>
              ))}
            </div>
          </div>
        </div>
      </header>

      <div className="projheader-content">
        <div className="projheader-left">
          <h1> What Is {title} ?</h1>
          <h4>{subtitle}</h4>
          <p>{description}</p>
        </div>
        <div className="projheader-right">
          <h1>{title} Imapct</h1>
          <h4>Impact Explored </h4>
          <p>{description2}</p>
        </div>
      </div>
      <div className="projheader-content2">
        <div className="socialsproj">
          {socialImages.map((image, index) => (
            <img key={index} src={image} alt={`social ${index}`} />
          ))}
        </div>
        <div className="socialsproj-numbers">
          {socialNumbers.map((number, index) => (
            <p key={index}>{number}</p>
          ))}
        </div>
        <img src={Img} alt="sa7 sattar" className="sa7sattarimg" />
        <img src={recImg} alt="rec3" />
      </div>
      <div className="projheader-content3">
        <h1> {title} Projects</h1>
      </div>
      <div className="image-container">
        {latestProjectsImg.map((img, index) => (
          <img key={index} src={img} alt={`proj ${index + 1}`} />
        ))}
      </div>

      <div className="projheader-content4">
        <div className="proj-section">
          <div className="latestproj-left">
            <h1> Check Out The Latest Projects </h1>
            <h3> {subtitle2}</h3>
            <p>{latestProjectsDescription}</p>
          </div>
          <div className="latestproj-right">
            <img src={imgg} alt="imgright" className="selket" />
          </div>
        </div>
        <div className="projimgset-parent">
          <div className="projimgset">
            <img src={fb1} alt="" className="top-left" />
            <img src={gray} alt="" className="gray" />
          </div>
          <div className="projimgset">
            <img src={ig1} alt="" className="top-right" />
            <img src={gray} alt="" className="gray" />
          </div>
        </div>
      </div>
      <div className="page-content3">
        <hr></hr>
        <div className="page-btm">
          <div className="socials">
            <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
              Share Page
            </p>
          </div>
          <div className="btp">
            <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
              {" "}
              Back to Top
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
