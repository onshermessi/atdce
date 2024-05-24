import React from "react";
import "./ImpactArea.css";

import revol from "../assets/im-cage.png";
import tel from "../assets/tel.png";
import impactimg from "../assets/impact-img.png";
import impactimg2 from "../assets/impact-img2.png";
import wf from "../assets/wf.png";
import whatsnext from "../assets/whatsnext.png";

export default function ImpactArea() {
  return (
    <>
      <div className="hero-grad">
        <header className="impact-header">
          <div className="impact-header-left">
            <img src={revol} />
          </div>
          <div className="impact-header-right">
            <h3> Tunisian Youth</h3>
            <h4> Transforming Digital Culture</h4>
            <p>
              Following the 2011 revolution, Tunisia's youth embraced digital
              technology to drive cultural change. The Tunisian Association for
              the Development of Electronic Culture (ATDCE) emerged as a key
              player, focusing on digital content creation and advocacy. This
              organization aims to positively impact Tunisia by engaging with
              various stakeholders and leveraging the power of digital
              platforms.
            </p>
          </div>
        </header>
      </div>

      <section className="dark-bg">
        <div className="impact-sec">
          <div className="impact-sec-left">
            <h3> Tunisian Youth</h3>
            <h4> Transforming Digital Culture</h4>
            <p>
              Following the 2011 revolution, Tunisia's youth embraced digital
              technology to drive cultural change. The Tunisian Association for
              the Development of Electronic Culture (ATDCE) emerged as a key
              player, focusing on digital content creation and advocacy. This
              organization aims to positively impact Tunisia by engaging with
              various stakeholders and leveraging the power of digital
              platforms.
            </p>
          </div>
          <div className="impact-sec-right">
            <img src={tel} />
          </div>
        </div>
      </section>
      <section className="impact-sec-2">
        <img src={impactimg} />
        <hr />
        <h3> How do we engage with youth</h3>
      </section>

      <section className="impact-sec-3">
        <div className="impact-sec-3-left">
          <img src={wf} />
        </div>
        <div className="impact-sec-3-right">
          <h3> The Digital Revolution</h3>
          <h4> Harnessing Technology for Change</h4>
          <p>
            The digital revolution has significantly reshaped Tunisia's media
            landscape. ATDCE is at the forefront of this transformation, using
            technology to create and distribute engaging content. Their efforts
            illustrate the importance of digital literacy and innovation in
            modern media practices, enabling better interaction and engagement
            with their audience.
          </p>
        </div>
      </section>

      <section className="dark-bg">
        <div className="impact-sec">
          <div className="impact-sec-left">
            <h3> What's Next </h3>
            <h4> Building a sustainable future</h4>
            <p>
              Looking ahead, ATDCE aims to build a strong online presence to
              attract international collaborators and funders. By presenting a
              professional and credible digital representation, they hope to
              secure partnerships and continue leading the way in Tunisia's
              digital culture transformation. This strategic focus on quality
              and innovation will ensure ATDCE's sustained impact in the digital
              media landscape.
            </p>
          </div>
          <div className="impact-sec-right">
            <img src={whatsnext} />
          </div>
        </div>
      </section>

      <section className="impact-sec-2">
        <img src={impactimg2} />
        <hr className="hr1" />
        <h3> Become a part of the change </h3>
      </section>

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
