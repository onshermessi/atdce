import React, { useState } from "react";
import "./Events.css";
import EventForm from "../components/EventForm.jsx";

import FilterButton from "../components/FilterButton.jsx";

import headerbg from "../assets/headerbg.png";
import nahjlboustaevent from "../assets/nahjlboustaevent.png";
import { useActionData } from "react-router-dom";

import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";
import event3 from "../assets/event3.png";
import event4 from "../assets/event4.png";
import event5 from "../assets/event5.png";
import event6 from "../assets/event6.png";
import event7 from "../assets/event7.png";
import joinusbg from "../assets/joinusbg.png";

import g1img1 from "../assets/g1img1.png";
import g2mimg2 from "../assets/g1mimg1.png";
import g2img2 from "../assets/g2img2.png";
import g1mimg1 from "../assets/g2mimg2.png";

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

  const handleButtonClick = () => {
    console.log("Clicked");
  };

  const images = [event1, event2, event3, event4, event5, event6, event7];

  const [dotPosition, setDotPosition] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (position) => {
    setDotPosition(position);
  };

  const dates = ["2022", "2023", "2024"];

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
                Details about Timeline...
              </p>
            }
          </div>
          <div className="other-events">
            <h1> Other Events</h1>
            <FilterButton
              onSelect={handleButtonClick}
              options={[
                { label: "Option1", value: "option1" },
                { label: "Option2", value: "option2" },
                { label: "Option3", value: "option3" },
              ]}
            >
              Filter
            </FilterButton>
          </div>
        </div>
      </div>

      <div className="image-container">
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`image ${index + 1}`} />
        ))}
      </div>
      <div className="page-content2">
        <div className="date-filter-container">
          <div className="line">
            <div className="dot" style={{ left: `${dotPosition}px` }} />
            <div className="dates">
              {dates.map((date, index) => (
                <span
                  key={index}
                  className="date"
                  onClick={() =>
                    handleDateClick((index / (dates.length - 1)) * 100)
                  }
                  style={{ left: `${(index / (dates.length - 1)) * 100}%` }}
                >
                  {date}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="join-us-banner">
        <img src={joinusbg} alt="join-us" />
        <h1>
          <span style={{ fontWeight: 400, fontSize: "20px" }}> Join Us As</span>
          <br></br>
          <span style={{ fontWeight: 600, fontSize: "28px" }}>A Volunteer</span>
        </h1>
      </div>
      <div className="btm-form">
        <div className="img-group1">
          <img src={g1img1} alt="img" />
          <img src={g1mimg1} alt="img" />
        </div>
        <div className="form-group">
          <h3
            style={{
              fontFamily: "Fairplay Display",
              fontSize: "34px",
              marginBottom: "0px",
            }}
          >
            Join Us Today
          </h3>
          <h4 style={{ fontWeight: "500", marginTop: "0px" }}>
            {" "}
            Claim Your Spot!
          </h4>
          <EventForm />
        </div>
        <div className="img-group2">
          <img src={g2img2} alt="img" />
          <img src={g2mimg2} alt="img" />
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
