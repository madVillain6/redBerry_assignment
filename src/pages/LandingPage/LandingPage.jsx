import React from "react";
import { useNavigate } from "react-router-dom";
import "./landing-page.css";
import Logo from "../../images/LOGO-02 3.svg";
import Stamp from "../../images/LOGO-40 1.svg";

export default function LandingPage() {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/personal-info");
    localStorage.clear();
  };

  return (
    <div className="background">
      <img className="logo" src={Logo} alt="logo" />
      <div className="line"></div>
      <div className="group-1">
        <img className="stamp" src={Stamp} alt="stamp" />
        <button className="btn-1" onClick={handleStart}>
          რეზიუმეს დამატება
        </button>
      </div>
    </div>
  );
}
