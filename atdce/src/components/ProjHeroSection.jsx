import React from "react";
import "./ProjHeroSection.css";

import boubli from "../assets/proj boubli.png";
import fb from "../assets/fbred.png";
import ig from "../assets/igred.png";
import utube from "../assets/utubered.png";
import sa7sattar from "../assets/SA7 SATTAR (2).png";
import rec33 from "../assets/rec33.png";

import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";
import proj7 from "../assets/proj7.png";
import selket from "../assets/selket.png";

import fb1 from "../assets/blackfb.png";
import ig1 from "../assets/blackig.png";
import gray from "../assets/gray1.png";

const images = [proj1, proj2, proj3, proj4, proj5, proj6, proj7];

export default function ProjHeroSection() {
  return (
    <>
      <header className="hero-grad">
        <div className="container-header">
          <img src={boubli} alt="proj-img" className="proj-img" />
          <div className="border-big"></div>
          <div className="header1">
            <div className="hero-numbers1">
              <p> +60 </p>
              <p> +60 </p>
              <p> +60 </p>
            </div>
            <div className="hero-titles1">
              <p> Partners </p>
              <p> Project </p>
              <p> Events </p>
            </div>
          </div>
        </div>
      </header>

      <div className="projheader-content">
        <div className="projheader-left">
          <h1> What is Boubli?</h1>
          <h4>Who or What Lies Behind the Name? </h4>
          <p>
            We aim to uplift marginalized voices and drive positive change in
            the digital sphere. Join us on this journey towards a more inclusive
            and vibrant digital landscape, made possible through our various
            projects.
          </p>
        </div>
        <div className="projheader-right">
          <h1>Boubli Impact</h1>
          <h4>Impact explored </h4>
          <p>
            We aim to uplift marginalized voices and drive positive change in
            the digital sphere. Join us on this journey towards a more inclusive
            and vibrant digital landscape, made possible through our various
          </p>
        </div>
      </div>
      <div className="projheader-content2">
        <div className="socialsproj">
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={utube} alt="" />
        </div>
        <div className="socialsproj-numbers">
          <p> 500K </p>
          <p> 500K </p>
          <p> 500K </p>
        </div>
        <img src={sa7sattar} alt="sa7 sattar" className="sa7sattarimg" />
        <img src={rec33} alt="rec3" />
      </div>
      <div className="projheader-content3">
        <h1> Boubli Projects </h1>
      </div>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`image ${index + 1}`} />
        ))}
      </div>

      <div className="projheader-content4">
        <div className="proj-section">
          <div className="latestproj-left">
            <h1> Check Our Latest Projects </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchangedGG
            </p>
          </div>
          <div className="latestproj-right">
            <img src={selket} alt="imgright" className="selket" />
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
