import React from "react";
import "./LandingPage.css";
import Logo from "../images/LOGO-02 3.svg";
import Stamp from "../images/LOGO-40 1.svg";

export default function LandingPage() {
  return (
    <div className="background">
      <img className="logo" src={Logo} alt="logo" />
      <div className="line"></div>
      <div className="group-1">
        <img className="stamp" src={Stamp} alt="stamp" />
        <button className="btn-1">რეზიუმეს დამატება</button>
      </div>
    </div>
  );
}
