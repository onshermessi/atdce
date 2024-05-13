import React from "react";
import LogoBoubli from "../assets/Logo Boubli (1) 1.png";
import LogoFreesh from "../assets/Freesh (4) 1.png";
import LogoBo3 from "../assets/logo-BO3 blanc 1.png";

export default function BlackSpace() {
  return (
    <div className="BlackSpace">
      <div className="set-of-images">
        <div className="set">
          <img src={LogoBoubli} alt="icon" />
          <p> Boubli</p>
        </div>
        <div className="set">
          <img src={LogoFreesh} alt="icon" />
          <p> Freesh</p>
        </div>
        <div className="set">
          <img src={LogoBo3} alt="icon" />
          <p> BO3</p>
        </div>
      </div>
    </div>
  );
}
