import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { ROUTES } from "../../constants";
import "../Form/personalInfo.css";

const PersonalInfoSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short").required("Required"),
  surname: Yup.string().min(2, "Too Short").required("Required"),
  aboutMe: Yup.string(),
  mobile: Yup.string().min(9).max(13),
  email: Yup.string().email("Invalid email address"),
});

export default function PersonalInfo() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      aboutMe: "",
      mobile: "",
      email: "",
    },
    onSubmit: () => navigate(ROUTES.getMainExperiencePath()),
    validationSchema: PersonalInfoSchema,
  });
  const navigate = useNavigate();
  console.log("formik", formik.values, formik.errors);

  return (
    <form className="form">
      <div className="head">
        <button> back </button>
        <span className="spn-1">პირადი ინფო</span>
        <span className="spn-2">1/3</span>
      </div>
      <div className="line"></div>
      <div className="name-lastname">
        <div className="submit-field-1">
          <span className="spn-3"> სახელი</span>
          <input
            className="inp-1"
            required
            type="text"
            placeholder="გია"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span className="spn-4">მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
        <div className="submit-field">
          <span className="spn-3"> გვარი</span>
          <input
            className="inp-1"
            type="text"
            placeholder="მიქაძე"
            name="surname"
            value={formik.values.surname}
            onChange={formik.handleChange}
          />
          <span className="spn-4">მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
      </div>
      <div className="photo-upload">
        <span className="spn-5">პირადი ფოტოს ატვირთვა</span>
        <label for="files" class="btn">
          ატვირთვა
        </label>
        <input id="files" type="file" />
      </div>
      <div>
        <span>ჩემ შესახებ (არასავალდებულო)</span>
        <textarea
          placeholder="ზოგადი ინფო შენ შესახებ"
          name="aboutMe"
          onChange={formik.handleChange}
          value={formik.values.aboutMe}
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        ></input>
        <span>აკრიფეთ თქენი ელ. ფოსტა</span>
      </div>
      <div>
        <input
          type="text"
          name="mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
        ></input>
        <span>აკრიფეთ თქენი მობილურის ნომერი</span>
      </div>
      {/* <button onClick={() => navigate(ROUTES.getMainExperiencePath())}> */}
      <button onClick={formik.handleSubmit}>შემდეგი</button>
    </form>
  );
}
