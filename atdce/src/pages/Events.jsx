import React, { useState } from "react";
import "./Events.css";
import EventForm from "../components/EventForm.jsx";

import headerbg from "../assets/headerbg.png";
import nahjlboustaevent from "../assets/nahjlboustaevent.png";
import { useActionData } from "react-router-dom";

export default function Events() {
  const [showText, setShowText] = useState({
    whereAndWhen: false,
    planning: false,
    timeline: false,
  });

  const [activeSection, setActiveSection] = useState("");

  const handleToggleText = (section) => {
    setShowText((prevShowText) => ({
      ...prevShowText,
      [section]: !prevShowText[section],
    }));

    setActiveSection((prevActiveSection) => {
      // If the clicked section is already active, toggle it off
      if (prevActiveSection === section && showText[section]) {
        return "";
      } else {
        // Otherwise, set the clicked section as active
        return section;
      }
    });
    if (activeSection && activeSection !== section) {
      setShowText((prevShowText) => ({
        ...prevShowText,
        [activeSection]: false,
      }));
    }
  };

  {
    /* (prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
    setActiveSection((prevSection) => (prevSection === section ? "" : section)); */
  }
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

          <div className="titles-with-borders">
            <h3
              onClick={() => handleToggleText("whereAndWhen")}
              className={activeSection === "whereAndWhen" ? "active" : ""}
            >
              Where & When
            </h3>
            {
              <p
                className={`whereAndWhen ${
                  showText.whereAndWhen ? "show" : ""
                }`}
              >
                Details about Where & When...
              </p>
            }
            <h3
              onClick={() => handleToggleText("planning")}
              className={activeSection === "planning" ? "active" : ""}
            >
              Planning
            </h3>
            {
              <p className={`planning ${showText.planning ? "show" : ""}`}>
                {" "}
                Details about Planning...
              </p>
            }
            <h3
              onClick={() => handleToggleText("timeline")}
              className={activeSection === "timeline" ? "active" : ""}
            >
              Timeline
            </h3>
            {
              <p className={`timeline ${showText.timeline ? "show" : ""}`}>
                {" "}
                Details about Timeline...
              </p>
            }
          </div>
        </div>
      </div>
    </>
  );
}
