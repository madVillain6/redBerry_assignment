import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import PersonalInfo from "./sub-pages/personal-info/PersonalInfo";
import Resume from "../Resume/Resume";
import Experience from "./sub-pages/experience/Experience";
import "./main.css";
import { ROUTES } from "../../constants";
import MainProvider from "./main-context";
import Education from "./sub-pages/education/Education";
import { MainContainer, MainLeft, MainRight } from "./styles";
import { BackButton } from "../../components/BackButton";
import { StarImg } from "../Resume/styles";
import Star from "../../images/star.svg";

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
    <MainProvider>
      <MainContainer>
        <BackButton />
        <MainLeft>
          <Container>
            <Routes>
              {router.map((route) => (
                <Route {...route} />
              ))}
            </Routes>
          </Container>
        </MainLeft>
        <MainRight>
          <Container>
            <Resume />
          </Container>
          <StarImg src={Star} alt="" />
        </MainRight>
      </MainContainer>
    </MainProvider>
  );
}
