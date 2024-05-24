import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Project1 from "./pages/Project1.jsx";
import Project2 from "./pages/Project2.jsx";
import Project3 from "./pages/Project3.jsx";
import ImpactArea from "./pages/ImpactArea.jsx";
{
  /*

import PartnersFunds from "./pages/PartnerFunds.jsx";

import AboutUs from "./pages/AboutUs.jsx";
import PartnerWithUs from "./pages/PartnerWithUs.jsx";
import Careers from "./pages/Careers.jsx";
import Blogs from "./pages/Blogs.jsx"; */
}

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="project1" element={<Project1 />} />
            <Route path="project2" element={<Project2 />} />
            <Route path="project3" element={<Project3 />} />
            <Route path="impactareas" element={<ImpactArea />} />
            {/*
          <Route path="partnersandfunds" element={<PartnersFunds />} />
          <Route path="impactareas" element={<ImpactArea />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="partnerwithus" element={<PartnerWithUs />} />
          <Route path="careers" element={<Careers />} />
          <Route path="blogs" element={<Blogs />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}
