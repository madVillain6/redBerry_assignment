import React, { useContext } from "react";
import "./personal-info.css";
import { MainContext } from "../../main-context";
import Input from "../../../../components/input/Input";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { StepHeader } from "../../../../components/StepHeader";

export default function PersonalInfo() {
  const {
    personalInfoForm: {
      touched,
      errors,
      values,
      setFieldValue,
      handleChange,
      handleSubmit,
    },
    handleImageUplad,
  } = useContext(MainContext);

  return (
    <Form>
      <Row className="mt-5">
        <Col>
          <StepHeader title="პირადი ინფო" step={1} />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={6}>
          <Form.Group>
            <Input
              label="სახელი"
              type="text"
              placeholder="სახელი"
              name="name"
              value={values.name}
              onChange={handleChange}
              touched={touched.name}
              error={errors.name}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Input
              label="გვარი"
              type="text"
              placeholder="გვარი"
              name="surname"
              value={values.surname}
              onChange={handleChange}
              touched={touched.surname}
              error={errors.surname}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Form.Group>
            <Input
              label="პირადი ფოტოს ატვირთვა"
              type="file"
              placeholder="ატვირთვა"
              name="image"
              value={values.image}
              onChange={(e) => {
                handleImageUplad(e.target.files[0]);
                setFieldValue("image", e.target.value);
              }}
              touched={touched.image}
              error={errors.image}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Form.Group>
            <Input
              label="ჩემ შესახებ (არასავალდებულო)"
              type="textarea"
              placeholder=""
              name="about_me"
              value={values.about_me}
              onChange={handleChange}
              touched={touched.about_me}
              error={errors.about_me}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Form.Group>
            <Input
              label="ელ. ფოსტა"
              type="email"
              placeholder="ელ. ფოსტა"
              name="email"
              value={values.email}
              onChange={handleChange}
              touched={touched.email}
              error={errors.email}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Input
            label="მობილურის ნომერი"
            type="text"
            placeholder="+995 551 12 34 56"
            name="phone_number"
            value={values.phone_number}
            onChange={handleChange}
            touched={touched.phone_number}
            error={errors.phone_number}
          />
        </Col>
      </Row>

      <button className="btn-3" onClick={handleSubmit} type="button">
        შემდეგი
      </button>
    </Form>
  );
}
