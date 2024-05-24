import React from "react";
import "../index.css";
import "./Projects.css";
import ProjContent from "../components/ProjContent";

import bo3 from "../assets/proj bo3.png";
import fb from "../assets/fbred.png";
import ig from "../assets/igred.png";
import utube from "../assets/utubered.png";
import bo33 from "../assets/logo-BO3.png";
import rec33 from "../assets/rec33.png";

import proj1 from "../assets/projb1.png";
import proj2 from "../assets/projb2.png";
import proj3 from "../assets/projb3.png";
import proj4 from "../assets/projb4.png";
import proj5 from "../assets/projb5.png";
import proj6 from "../assets/projb6.png";
import proj7 from "../assets/projb7.png";
import bo333 from "../assets/bo333.png";

import fb1 from "../assets/blackfb.png";
import ig1 from "../assets/blackig.png";
import gray from "../assets/gray1.png";

const images = [proj1, proj2, proj3, proj4, proj5, proj6, proj7];

export default function Projects() {
  const projectData = {
    title: "Bo3",
    subtitle: "Who or What Lies Behind the Name?",
    description:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various projects.",
    numbers: ["+60", "+60", "+60"],
    projectimg: [bo3],
    highlights: ["Partners", "Projects", "Events"],
    socialImages: [fb, ig, utube],
    socialNumbers: ["500k", "500k", "500k"],
    Img: [bo33],
    recImg: [rec33],
    latestProjectsDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchangedGG",
    latestProjectsImg: [proj1, proj2, proj3, proj4, proj5, proj6, proj7],
    project: "",
    partner: "",
    title2: "",
    description2:
      "We aim to uplift marginalized voices and drive positive change in the digital sphere. Join us on this journey towards a more inclusive and vibrant digital landscape, made possible through our various ",
    subtitle2: "Blech Barriere",
    imgg: [bo333],
  };
  return (
    <>
      <ProjContent {...projectData} />
    </>
  );
}
