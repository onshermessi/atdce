import React from "react";
import "./Careers.css";

import banner from "../assets/careers-banner.png";

import cg1 from "../assets/c-g-1.png";
import cg2 from "../assets/c-g-2.png";

import co1 from "../assets/c-o-1.png";
import co2 from "../assets/c-o-2.png";
import co3 from "../assets/c-o-3.png";
import co4 from "../assets/c-o-4.png";

import partnershiprec from "../assets/partnership-rec.png";

export default function Careers() {
  return (
    <div>
      <img src={banner} alt="" />
      <div className="c-content-1">
        <div className="c-content-1-row">
          <div className="c-content-1-row-1">
            <h3> Join Our Team </h3>
            <h5> A career Full of Opportunities </h5>
            <p>
              We aim to uplift marginalized voices and drive positive change in
              the digital sphere. Join us on this journey towards a more
              inclusive and vibrant digital landscape, made possible through our
              various projects.
            </p>
          </div>
          <div className="c-content-1-row-2">
            <img src={cg1} alt="" className="c-content-1-row-2-img" />
            <img src={cg2} alt="" className="c-content-1-row-2-img" />
          </div>
        </div>
        <h3> Current Job Openings</h3>
        <div className="c-img-set">
          <img src={co1} alt="" />
          <img src={co2} alt="" />
          <img src={co3} alt="" />
          <img src={co4} alt="" />
        </div>
        <h3>The Importance of Creativity</h3>
        <p>
          Creativity is the heartbeat of innovation, driving progress across all
          facets of human endeavor. It's the spark that ignites new ideas,
          pushes boundaries, and transforms the ordinary into the extraordinary.
          In art, science, business, and beyond, creativity fuels breakthroughs,
          inspiring us to see the world with fresh eyes and tackle challenges
          with ingenuity. It's the driving force behind cultural evolution,
          shaping societies and enriching our collective experience. Embracing
          creativity empowers individuals to express themselves authentically,
          fostering a culture of exploration and discovery. In a rapidly
          changing world, the importance of creativity cannot be overstated—it
          is the key to unlocking limitless possibilities and shaping a brighter
          future for us all.
        </p>
        <p>
          ATDCE champions creativity, empowering innovation and problem-solving.
          Join us to shape a vibrant world through creativity's power.
        </p>

        <h3>Are you searching for an internship ?</h3>
        <div className="c-img-set">
          <img src={co1} alt="" />
          <img src={co2} alt="" />
          <img src={co3} alt="" />
          <img src={co4} alt="" />
        </div>
      </div>
      <div className="part-content-5">
        <div className="part-content-5-in">
          <h3> Job Inquiries</h3>
          <h5> Zemni Norchene</h5>
          <h6> Vice President Of Vice President</h6>
          <p> Zemninorchene01@Gmail.com</p>
        </div>
        <img src={partnershiprec} alt="" />
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
