import React from "react";
import "./LandingPage.css";
import Logo from "../images/LOGO-02 3.svg";
import Stamp from "../images/LOGO-40 1.svg";
import { useNavigate } from "react-router-dom";
import * as S from "../../components/input";
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="background">
      <img className="logo" src={Logo} alt="logo" />
      <div className="line"></div>
      <div className="group-1">
        <img className="stamp" src={Stamp} alt="stamp" />
        <button className="btn-1" onClick={() => navigate("/personal-info")}>
          რეზიუმეს დამატება
        </button>
      </div>
    </div>
  );
}
