import React, { Fragment, useContext, useMemo } from "react";
import { MainContext } from "../Main/main-context";
import {
  Picture,
  NameBar,
  Contact,
  NameBarSmall,
  StyledP,
  StyledSpn,
  DateSpn,
  Paragraph,
} from "./styles";
import Phone from "../../images/phone.svg";
import At from "../../images/at.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GrayLine } from "../../components/input";

const Resume = () => {
  const { experienceForm, personalInfoForm, imagePreview, educationForm } =
    useContext(MainContext);

  const { name, surname, email, phone_number, about_me } =
    personalInfoForm.values;

  const hasExperience = useMemo(() => {
    const firstExperience = experienceForm.values[0];
    return !!(
      firstExperience &&
      (firstExperience.position ||
        firstExperience.employer ||
        firstExperience.start_date ||
        firstExperience.due_date ||
        firstExperience.description)
    );
  }, [experienceForm.values]);

  const hasEducation = useMemo(() => {
    const firstEducation = educationForm.values[0];
    return !!(
      firstEducation &&
      (firstEducation.institute ||
        firstEducation.degree ||
        firstEducation.due_date ||
        firstEducation.description)
    );
  }, [educationForm.values]);

  return (
    <Container>
      <Row className="mt-5">
        <Col md={8}>
          <NameBar>
            {name} {surname}
          </NameBar>
          <div className="mt-4">
            {!!email && (
              <Contact>
                <img src={At} alt="" style={{ marginRight: "12px" }} />
                {email}
              </Contact>
            )}
            {!!phone_number && (
              <Contact>
                <img src={Phone} alt="" style={{ marginRight: "12px" }} />
                {phone_number}
              </Contact>
            )}
          </div>
          {!!about_me && (
            <>
              <NameBarSmall className="mt-5">ჩემს შესახებ</NameBarSmall>
              <StyledP>{about_me}</StyledP>
            </>
          )}
        </Col>
        <Col md={4}>{!!imagePreview && <Picture img={imagePreview} />}</Col>
      </Row>

      {hasExperience && (
        <Row>
          <Col>
            <GrayLine />
          </Col>
        </Row>
      )}

      {hasExperience && (
        <Row className="mt-5">
          <Col>
            <NameBarSmall>გამოცდილება</NameBarSmall>

            {experienceForm.values.map((experience, index) => (
              <Fragment key={index}>
                {experience.position && experience.employer && (
                  <div>
                    <StyledSpn>
                      {experience.position}, {experience.employer}
                    </StyledSpn>
                  </div>
                )}

                {experience.start_date && experience.due_date && (
                  <div>
                    <DateSpn>
                      {experience.start_date} - {experience.due_date}
                    </DateSpn>
                  </div>
                )}

                <Paragraph>{experience.description}</Paragraph>
              </Fragment>
            ))}
          </Col>
        </Row>
      )}

      {hasEducation && (
        <Row>
          <Col>
            <GrayLine />
          </Col>
        </Row>
      )}

      {hasEducation && (
        <Row className="mt-5">
          <Col>
            <NameBarSmall>განათლება</NameBarSmall>

            {educationForm.values.map((education, index) => (
              <Fragment key={index}>
                <div>
                  <StyledSpn>
                    {education.institute}, {education.degree}
                  </StyledSpn>
                </div>
                <div>
                  <DateSpn>{education.due_date}</DateSpn>
                </div>

                <Paragraph>{education.description}</Paragraph>
              </Fragment>
            ))}
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Resume;
