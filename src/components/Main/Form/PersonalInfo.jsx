import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import "../Form/personalInfo.css";
import Back from "../../images/Group 4.svg";
import { MainContext } from "../MainContext";
import { Input } from "../../input";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const { personalInfoForm } = useContext(MainContext);
  console.log(
    "personalInfoForm",
    personalInfoForm.values,
    personalInfoForm.errors
  );
  return (
    <form className="form">
      <div className="head">
        <button className="btn-0" onClick={() => navigate(ROUTES.landingPage)}>
          <img src={Back} alt="back" />
        </button>
        <span className="spn-1">პირადი ინფო</span>
        <span className="spn-2">1/3</span>
        <div className="line-1"></div>
      </div>
      <div className="name-lastname">
        <div className="submit-field-1">
          <span className="spn-3"> სახელი</span>
          <Input
            className="inp-1"
            required
            type="text"
            placeholder="გია"
            name="name"
            value={personalInfoForm.values.name}
            onChange={personalInfoForm.handleChange}
          />
          <span className="spn-4">მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
        <div className="submit-field">
          <span className="spn-3"> გვარი</span>
          <Input
            className="inp-1"
            type="text"
            placeholder="მიქაძე"
            name="surname"
            value={personalInfoForm.values.surname}
            onChange={personalInfoForm.handleChange}
          />
          <span className="spn-4">მინიმუმ 2 ასო, ქართული ასოები</span>
        </div>
      </div>
      <div className="photo-upload">
        <span className="spn-5">პირადი ფოტოს ატვირთვა</span>
        <label htmlFor="files" className="btn">
          ატვირთვა
        </label>
        <input id="files" type="file" />
      </div>
      <div className="txt-area">
        <span>ჩემ შესახებ (არასავალდებულო)</span>
        <textarea
          className="txt-area-1"
          placeholder="ზოგადი ინფო შენ შესახებ"
          name="aboutMe"
          onChange={personalInfoForm.handleChange}
          value={personalInfoForm.values.aboutMe}
        />
      </div>
      <div className="input-field-2">
        <span> ელ. ფოსტა</span>
        <Input
          className="input-2"
          placeholder="anzorr666@redberry.ge"
          type="email"
          name="email"
          value={personalInfoForm.values.email}
          onChange={personalInfoForm.handleChange}
        />
        <span className="spn-4">უნდა მთავრდებოდეს @redberry.ge-ით</span>
      </div>
      <div className="input-field-2">
        <span> მობილურის ნომერი</span>

        <input
          className="input-2"
          placeholder="+995 551 12 34 56"
          type="text"
          name="mobile"
          value={personalInfoForm.values.mobile}
          onChange={personalInfoForm.handleChange}
        />

        <span className="spn-4">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </span>
      </div>
      {/* <button onClick={() => navigate(ROUTES.getMainExperiencePath())}> */}
      <button className="btn-3" onClick={personalInfoForm.handleSubmit}>
        შემდეგი
      </button>
    </form>
  );
}
