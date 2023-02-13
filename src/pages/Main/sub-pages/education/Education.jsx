import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ROUTES } from "../../../../constants";
import { MainContext } from "../../main-context";
import * as S from "../../../../components/input";
import Input from "../../../../components/input/Input";
import Dropdown from "../../../../components/DropDown";
import { StepHeader } from "../../../../components/StepHeader";
import { apiFetchDegrees } from "../../../../api";

export default function Education() {
  const {
    educationForm: {
      touched,
      errors,
      values,
      setValues,
      handleChange,
      handleSubmit,
    },
  } = useContext(MainContext);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    apiFetchDegrees().then((degrees) => {
      setOptions(degrees);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <Form>
      <Row className="mt-5">
        <Col>
          <StepHeader title="განათლება" step={3} />
        </Col>
      </Row>

      {values.map((education, index) => {
        const itemErrors = errors[index] || {};
        const itemTouched = touched[index] || {};
        return (
          <Fragment key={index}>
            <Row className="mt-5">
              <Col>
                <Input
                  label="სასწავლებელი"
                  type="text"
                  placeholder="სასწავლებელი"
                  name={`${index}.institute`}
                  value={education.institute}
                  onChange={handleChange}
                  touched={itemTouched.institute}
                  error={itemErrors.institute}
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Dropdown
                  options={options}
                  placeholder={"ხარისხი"}
                  name={`${index}.degree`}
                  value={education.degree}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <Input
                  label="დასრულების რიცხვი"
                  type="date"
                  placeholder="დასრულების რიცხვი"
                  name={`${index}.due_date`}
                  value={education.due_date}
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
                  value={education.description}
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
              institute: "",
              degree: "",
              due_date: "",
              description: "",
            },
          ])
        }
      >
        სხვა სასწავლებლის დამატება
      </S.BlueBtn>
      <S.NavDiv>
        <S.NavBtn onClick={() => navigate(ROUTES.getMainExperiencePath())}>
          უკან
        </S.NavBtn>
        <S.NavBtn type="button" onClick={handleSubmit}>
          დასრულება
        </S.NavBtn>
      </S.NavDiv>
    </Form>
  );
}
