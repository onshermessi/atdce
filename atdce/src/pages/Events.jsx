import React from "react";
import "./Events.css";
import EventForm from "../components/EventForm.jsx";

import headerbg from "../assets/headerbg.png";
import nahjlboustaevent from "../assets/nahjlboustaevent.png";

export default function Events() {
  return (
    <>
      <header className="header">
        <img src={headerbg} alt="headerbg" />
        <div className="header-content">
          <div className="header-left">
            <img src={nahjlboustaevent} alt="" />
            <h1> 01/02/2001</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentia.
            </p>
          </div>
          <div className="form-container">
            <EventForm />
          </div>
        </div>
      </header>

      <div className="content-wrapper">
        <div className="page-content">
          <h1> Mahrajane nahj bousta </h1>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised.
          </p>
          <p style={{ fontWeight: 700 }}>See more</p>
        </div>
      </div>
    </>
  );
}
