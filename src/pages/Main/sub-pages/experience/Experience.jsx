import React, { Fragment, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { MainContext } from "../../main-context";
import * as S from "../../../../components/input";
import Input from "../../../../components/input/Input";
import { Col, Row } from "react-bootstrap";
import { StepHeader } from "../../../../components/StepHeader";

export default function Experience() {
  const navigate = useNavigate();
  const {
    experienceForm: {
      touched,
      errors,
      values,
      setValues,
      handleChange,
      handleSubmit,
    },
  } = useContext(MainContext);

  return (
    <Form>
      <Row className="mt-5">
        <Col>
          <StepHeader title="გამოცდილება" step={2} />
        </Col>
      </Row>

      {values.map((experience, index) => {
        const itemErrors = errors[index] || {};
        const itemTouched = touched[index] || {};
        return (
          <Fragment key={index}>
            <Row className="mt-5">
              <Col>
                <Input
                  label="თანამდებობა"
                  type="text"
                  placeholder="თანამდებობა"
                  name={`${index}.position`}
                  value={experience.position}
                  onChange={handleChange}
                  touched={itemTouched.position}
                  error={itemErrors.position}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Input
                  label="დამსაქმებელი"
                  type="text"
                  placeholder="დამსაქმებელი"
                  name={`${index}.employer`}
                  value={experience.employer}
                  onChange={handleChange}
                  touched={itemTouched.employer}
                  error={itemErrors.employer}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Input
                  label="დაწყების რიცხვი"
                  type="date"
                  placeholder="დაწყების რიცხვი"
                  name={`${index}.start_date`}
                  value={experience.start_date}
                  onChange={handleChange}
                  touched={itemTouched.start_date}
                  error={itemErrors.start_date}
                />
              </Col>
              <Col md={6}>
                <Input
                  label="დასრულების რიცხვი"
                  type="date"
                  placeholder="დაწყების რიცხვი"
                  name={`${index}.due_date`}
                  value={experience.due_date}
                  onChange={handleChange}
                  touched={itemTouched.due_date}
                  error={itemErrors.due_date}
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Input
                  label="აღწერა"
                  type="textarea"
                  placeholder="აღწერა"
                  name={`${index}.description`}
                  value={experience.description}
                  onChange={handleChange}
                  touched={itemTouched.description}
                  error={itemErrors.description}
                />
              </Col>
            </Row>

            <S.GrayLine />
          </Fragment>
        );
      })}

      <S.BlueBtn
        type="button"
        onClick={() =>
          setValues([
            ...values,
            {
              position: "",
              employer: "",
              start_date: "",
              due_date: "",
              description: "",
            },
          ])
        }
      >
        მეტი გამოცდილების დამატება
      </S.BlueBtn>
      <S.NavDiv>
        <S.NavBtn type="button" onClick={() => navigate(-1)}>
          უკან
        </S.NavBtn>
        <S.NavBtn type="button" onClick={handleSubmit}>
          შემდეგი
        </S.NavBtn>
      </S.NavDiv>
    </Form>
  );
}
