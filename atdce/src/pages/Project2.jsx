import React from "react";
import "../index.css";
import "./Projects.css";
import ProjContent from "../components/ProjContent";

import freesh from "../assets/proj freesh.png";
import fb2 from "../assets/fb2.png";
import ig2 from "../assets/ig2.png";
import utube2 from "../assets/utube2.png";
import freeshg from "../assets/Freesh - txt 1.png";
import rec33 from "../assets/rec33.png";

import proj1 from "../assets/projf1.png";
import proj2 from "../assets/projf2.png";
import proj3 from "../assets/projf3.png";
import proj4 from "../assets/projf4.png";
import proj5 from "../assets/projf5.png";
import proj6 from "../assets/projf6.png";
import proj7 from "../assets/projf7.png";
import aalech from "../assets/aalech.png";

const images = [proj1, proj2, proj3, proj4, proj5, proj6, proj7];

export default function Projects() {
  const projectData = {
    title: "Freesh",
    subtitle: "Who or What Lies Behind the Name?",
    description:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various projects.",
    numbers: ["+60", "+60", "+60"],
    projectimg: [freesh],
    highlights: ["Partners", "Projects", "Events"],
    socialImages: [fb2, ig2, utube2],
    socialNumbers: ["500k", "500k", "500k"],
    Img: [freeshg],
    recImg: [rec33],
    latestProjectsDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedGG",
    latestProjectsImg: [proj1, proj2, proj3, proj4, proj5, proj6, proj7],
    description2:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various ",
    subtitle2: "Blech Barriere",
    imgg: [aalech],
  };
  return (
    <>
      <ProjContent {...projectData} />
    </>
  );
}
