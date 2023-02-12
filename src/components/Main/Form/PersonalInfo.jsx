import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import "../Form/personalInfo.css";
import Back from "../../images/Group 4.svg";
import { MainContext } from "../MainContext";
import Input2 from "../../input/Input";
import * as S from "../../input";

export default function PersonalInfo() {
  const navigate = useNavigate();
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
    <S.Wrapper>
      <form className="form">
        <div className="head">
          <button
            className="btn-0"
            onClick={() => navigate(ROUTES.landingPage)}
          >
            <img src={Back} alt="back" />
          </button>
          <span className="spn-1">პირადი ინფო</span>
          <span className="spn-2">1/3</span>
          <div className="line-1"></div>
        </div>
        <div className="name-lastname">
          <Input2
            label="სახელი"
            type="text"
            placeholder="სახელი"
            name="name"
            value={values.name}
            onChange={handleChange}
            touched={touched.name}
            error={errors.name}
          />
          <div className="submit-field">
            <Input2
              label="გვარი"
              type="text"
              placeholder="გვარი"
              name="surname"
              value={values.surname}
              onChange={handleChange}
              touched={touched.surname}
              error={errors.surname}
            />
          </div>
        </div>
        <div className="photo-upload">
          <Input2
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
        </div>
        <div className="txt-area">
          <Input2
            label="ჩემ შესახებ (არასავალდებულო)"
            type="textarea"
            placeholder=""
            name="about_me"
            value={values.about_me}
            onChange={handleChange}
            touched={touched.about_me}
            error={errors.about_me}
          />
        </div>
        <div className="input-field-2">
          <Input2
            label="ელ. ფოსტა"
            type="email"
            placeholder="ელ. ფოსტა"
            name="email"
            value={values.email}
            onChange={handleChange}
            touched={touched.email}
            error={errors.email}
          />
        </div>
        <div className="input-field-2">
          <Input2
            label="მობილურის ნომერი"
            type="text"
            placeholder="+995 551 12 34 56"
            name="phone_number"
            value={values.phone_number}
            onChange={handleChange}
            touched={touched.phone_number}
            error={errors.phone_number}
          />
        </div>

        <button className="btn-3" onClick={handleSubmit} type="button">
          შემდეგი
        </button>
      </form>
    </S.Wrapper>
  );
}
