import React from "react";
import "./Blogs.css";

import blimg1 from "../assets/b-l-img1.png";

import post1 from "../assets/post1.png";
import post2 from "../assets/post2.png";
import post3 from "../assets/post3.png";
import post4 from "../assets/post4.png";

import more1 from "../assets/more1.png";
import more2 from "../assets/more2.png";
import more3 from "../assets/more3.png";
import more4 from "../assets/more4.png";

export default function Blogs() {
  return (
    <>
      <div className="b-container">
        <div className="b-container-1">
          <div className="b-container-1-sec">
            <img src={blimg1} alt="" />
            <div className="b-container-1-sec-t">
              <h3> Nahj El Bousta </h3>
              <h5> The Street Of The Old Post</h5>
              <p>
                The old street posts in Tunisia stand as silent witnesses to the
                nation's rich history and cultural heritage. These weathered
                structures, adorned with intricate designs and symbols, tell
                stories of bygone eras and past civilizations that have shaped
                the country's identity. Despite the passage of centuries, they
                remain steadfast, serving as timeless landmarks and reminders of
                Tunisia's enduring legacy.
              </p>
            </div>
          </div>

          <p>
            ATDCE envisions transforming abandoned spaces, including old street
            posts in Tunisia, into vibrant cultural hubs that celebrate the
            nation's heritage. Through strategic planning and community
            engagement, ATDCE will breathe new life into these neglected areas,
            revitalizing them as dynamic venues for artistic expression and
            cultural exchange. Step by step, ATDCE will organize events,
            workshops, and exhibitions, inviting local artists and residents to
            participate in the transformation process. Graffiti artists will be
            invited to adorn the street posts with colorful murals, turning them
            into captivating works of art that reflect Tunisia's diverse culture
            and history. As the space becomes a focal point for creativity and
            community interaction, ATDCE will continue to host events and
            activities, fostering a sense of belonging and pride among
            residents. Through its innovative approach, ATDCE will revitalize
            these abandoned spaces, reimagining them as vibrant cultural spaces
            that inspire and enrich the lives of all who visit.
          </p>
          <div className="b-img-set">
            <img src={post1} alt="" />
            <img src={post2} alt="" />
            <img src={post3} alt="" />
            <img src={post4} alt="" />
          </div>
        </div>
        <div className="b-container-2">
          <h4>Read more</h4>
          <img src={more1} alt="" />
          <img src={more2} alt="" />
          <img src={more3} alt="" />
          <img src={more4} alt="" />
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
