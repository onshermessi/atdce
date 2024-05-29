import React from "react";
import "./PartnerWithUs.css";
import HeroSec from "../components/HeroSec.jsx";
import nahjbousta1 from "../assets/nahj bousta 1.png";

import v1 from "../assets/1.png";
import v2 from "../assets/2.png";
import v3 from "../assets/3.png";
import v4 from "../assets/4.png";
import v5 from "../assets/5.png";

import pwu1 from "../assets/pwu1.png";
import pwu2 from "../assets/pwu2.png";
import pwu3 from "../assets/pwu3.png";

import prec1 from "../assets/p-rec1.png";
import prec2 from "../assets/p-rec2.png";
import prec3 from "../assets/p-rec3.png";

import partnershiprec from "../assets/partnership-rec.png";

export default function PartnerWithUs() {
  const HeroSecData = {
    title: "Partner With Us",
    subtitle: "Let's Make Wonders Together!",
    description1:
      "Partnering with ATDCE means uniting with a cause dedicated to empowering youth and fostering positive change. With a focus on integrity, education, participation, and sustainability, our mission resonates with those who seek meaningful impact.",
    description2:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various projects.",
    Img: [nahjbousta1],
  };

  return (
    <div>
      <HeroSec {...HeroSecData} />
      <div className="part-content-1">
        <h3>The Five Core Values of ATDCE</h3>
        <div className="part-values">
          <div className="part-values-wrap">
            <img src={v1} alt="" className="part-values-item" />
            <h4> Empowerment</h4>
          </div>
          <div className="part-values-wrap">
            <img src={v2} alt="" className="part-values-item" />
            <h4> Transparency</h4>
          </div>
          <div className="part-values-wrap">
            <img src={v3} alt="" className="part-values-item" />
            <h4> Youth</h4>
          </div>
          <div className="part-values-wrap">
            <img src={v4} alt="" className="part-values-item" />
            <h4> Credibility</h4>
          </div>
          <div className="part-values-wrap">
            <img src={v5} alt="" className="part-values-item" />
            <h4> Community</h4>
          </div>
        </div>
      </div>

      <div className="part-content-2">
        <div className="a-setifvids">
          <img src={pwu1} alt="" className="a-vid-item" />
          <img src={pwu2} alt="" className="a-vid-item" />
          <img src={pwu3} alt="" className="a-vid-item" />
        </div>
      </div>

      <div className="part-content-3">
        <h3>Here's what we're achieving collaboratively</h3>
      </div>
      <div className="part-content-4">
        <div className="part-img-set">
          <img src={prec1} alt="" className="part-img-set-item" />
          <div className="part-img-set-1">
            <h4>BO3 The Biggest Gaming Event</h4>
            <p>
              The 2018 debut of BO3 revolutionized Tunisian e-sports. Originally
              a gaming community, BO3 quickly became a hub for innovation and
              collaboration. For ATDCE, BO3 epitomized their commitment to
              empowering Tunisian youth through digital platforms, showcasing
              the potential of e-sports to drive positive change.
            </p>
          </div>
        </div>
        <div className="part-img-set">
          <img src={prec2} alt="" className="part-img-set-item" />
          <div className="part-img-set-1">
            <h4> The War Of the Old Post Street </h4>
            <p>
              In the heart of the challenging the Old post street, ATDCE sees an
              opportunity for transformation. Despite its dangerous and dirty
              reputation, ATDCE envisions turning this space into a cultural
              hub. By cleaning up and revitalizing Nahj Bosuta, ATDCE aims to
              create a safe and inspiring environment for Tunisian youth to
              express themselves creatively.
            </p>
          </div>
        </div>
        <div className="part-img-set">
          <img src={prec3} alt="" className="part-img-set-item" />
          <div className="part-img-set-1">
            <h4> Tunisian Youth: the hip hop movement</h4>
            <p>
              Boubli's "5odh lBeat" initiative is a game-changer for Tunisia's
              hip-hop scene. By providing a platform for aspiring artists,
              Boubli empowers them to showcase their talent and collaborate
              within a supportive community. This initiative reflects Boubli's
              dedication to nurturing creativity and driving positive change in
              Tunisia's cultural sphere.
            </p>
          </div>
        </div>
      </div>

      <div className="part-content-5">
        <div className="part-content-5-in">
          <h3> Partnership Inquiries</h3>
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
