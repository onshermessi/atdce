import React from "react";
import "../index.css";
import "./Projects.css";
import ProjContent from "../components/ProjContent";

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

const images = [proj1, proj2, proj3, proj4, proj5, proj6, proj7];

export default function Projects() {
  const projectData = {
    title: "Boubli",
    subtitle: "Who or What Lies Behind the Name?",
    description:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various projects.",
    numbers: ["+60", "+60", "+60"],
    projectimg: [boubli],
    highlights: ["Partners", "Projects", "Events"],
    events: "",
    socialImages: [fb, ig, utube],
    socialNumbers: ["500k", "500k", "500k"],
    Img: [sa7sattar],
    recImg: [rec33],
    latestProjectsDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedGG",
    latestProjectsImg: [proj1, proj2, proj3, proj4, proj5, proj6, proj7],
    description2:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various ",
    subtitle2: "Blech Barriere",
    imgg: [selket],
  };
  return (
    <>
      <ProjContent {...projectData} />
    </>
  );
}
