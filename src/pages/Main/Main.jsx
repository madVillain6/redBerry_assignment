import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PersonalInfo from "./sub-pages/personal-info/PersonalInfo";
import Resume from "../Resume/Resume";
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
  const location = useLocation();
  console.log(location);
  return (
    <MainProvider>
      <Container>
        <Row>
          <Col md={7}>
            <Routes>
              {router.map((route) => (
                <Route {...route} />
              ))}
            </Routes>
          </Col>
          <Col md={location.pathname === "/personal-info/resume" ? 12 : 5}>
            <Resume />
          </Col>
        </Row>
      </Container>
    </MainProvider>
  );
}
