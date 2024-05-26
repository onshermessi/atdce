import React from "react";
import "./AboutUs.css";

import banner from "../assets/aboutus-banner.png";
import atdcelogo from "../assets/logo 2.png";
import banner2 from "../assets/a-banner2.png";

import hist1 from "../assets/hist1.png";
import hist2 from "../assets/hist2.png";
import hist3 from "../assets/hist3.png";

import v1 from "../assets/v1.png";
import v2 from "../assets/v2.png";
import v3 from "../assets/v3.png";

export default function AboutUs() {
  return (
    <div>
      <div className="a-banner-container">
        <img src={banner} alt="" className="aboutus-banner" />
        <div className="a-center-logo">
          <img src={atdcelogo} alt="" className="atdce-logo" />
        </div>
      </div>
      <div className="a-content1-bg">
        <div className="a-content1">
          <h3> About Us</h3>
          <p>
            The Tunisian Association for Electronic Culture Development (ATDCE)
            empowers youth and promotes digital culture in Tunisia. Since 2019,
            it has supported young creators, fostered innovation, and advocated
            for positive digital change. With a focus on capacity-building and
            community engagement, ATDCE provides economic opportunities and
            resources for youth in the digital sector.
          </p>
        </div>
      </div>
      <div className="a-content2">
        <h3>Our Vision</h3>
        <p>
          We work towards the ultimate goal of uniting a large community that
          can have a positive impact on Tunisia and bring it into the 21st
          century. To that end, we offer content, training, events, talks, etc.
        </p>
      </div>
      <img src={banner2} alt="" className="a-banner2" />
      <div className="a-content3">
        <h3>Our Mission</h3>
        <p>
          Through creative projects, we strive to bring Tunisia into the digital
          age. To date, projects like BO3, BOUBLI, and Freesh are references
          among Tunisian young generations. More details can be found in the
          “Projects” section.
        </p>
        <p>
          We work towards the ultimate goal of uniting a large community that
          can have a positive impact on Tunisia and bring it into the 21st
          century. To that end, we offer content, training, events, talks, etc.
        </p>
      </div>
      <div className="a-content4">
        <h3> History</h3>
      </div>
      <div className="a-content5-wrap">
        <div className="a-content5">
          <div className="a-imgset">
            <img src={hist1} alt="" className="a-imgset-item" />
            <p> 2022</p>
            <h3>Ramadhan Activities</h3>
            <p>A series of Ramadan activities, including iftar gatherings.</p>
          </div>
          <div className="a-imgset">
            <img src={hist2} alt="" className="a-imgset-item" />
            <p> 2023</p>
            <h3>Gang’lab</h3>
            <p>A training series to educate content creators.</p>
          </div>
          <div className="a-imgset">
            <img src={hist3} alt="" className="a-imgset-item" />
            <p> 2024</p>
            <h3>Transportation talk</h3>
            <p>
              Raising awareness about transportation in Tunisia and its
              associated challenges.
            </p>
          </div>
        </div>
        <hr className="au-hr"></hr>
      </div>
      <div className="a-setifvids">
        <img src={v2} alt="" className="a-vid-item" />
        <img src={v1} alt="" className="a-vid-item" />
        <img src={v3} alt="" className="a-vid-item" />
      </div>
      <div className="a-title">
        <h1> Become A Partner </h1>
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
    </div>
  );
}
