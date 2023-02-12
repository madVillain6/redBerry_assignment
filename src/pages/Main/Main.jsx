import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./sub-pages/personal-info/PersonalInfo";
import Resume from "./Resume";
import Experience from "./sub-pages/experience/Experience";
import "./main.css";
import { ROUTES } from "../../constants";
import MainProvider from "./main-context";
import Education from "./sub-pages/education/Education";

const router = [
  {
    key: 0,
    path: ROUTES.mainPersonalInfo,
    element: <PersonalInfo />,
  },
  {
    key: 1,
    path: ROUTES.mainExperience,
    element: <Experience />,
  },
  {
    key: 2,
    path: ROUTES.mainEducation,
    element: <Education />,
  },
  {
    key: 3,
    path: ROUTES.mainResume,
    element: <Fragment />,
  },
];

export default function Main() {
  return (
    <div className="main">
      <MainProvider>
        <Routes>
          {router.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
        <Resume />
      </MainProvider>
    </div>
  );
}