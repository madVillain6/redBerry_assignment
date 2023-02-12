import React, { Fragment, useContext } from "react";
import { MainContext } from "./main-context";
import * as S from "../../components/input";

const Resume = () => {
  const { experienceForm, personalInfoForm, imagePreview, educationForm } =
    useContext(MainContext);

  return (
    <S.ResumeWraper>
      <S.AboutMe>
        <S.Div>
          <S.NameBar>
            {personalInfoForm.values.name} {personalInfoForm.values.surname}
          </S.NameBar>
          <S.Contact> &#64; {personalInfoForm.values.email}</S.Contact>
          <S.Contact>
            {" "}
            &#128222; {personalInfoForm.values.phone_number}
          </S.Contact>
          <div></div>
          <S.TxtAreaPromt>ჩემს შესახებ</S.TxtAreaPromt>
          <S.TxtArea>{personalInfoForm.values.about_me}</S.TxtArea>
        </S.Div>
        <S.Picture img={imagePreview} />
      </S.AboutMe>

      <S.GrayLine1></S.GrayLine1>
      <div>
        <S.TxtAreaPromt>გამოცდილება </S.TxtAreaPromt>
        {experienceForm.values.map((experience, index) => (
          <Fragment key={index}>
            <p>{experience.position}</p>
            <p>{experience.employer}</p>
            <p>{experience.start_date}</p>
            <p>{experience.due_date}</p>
            <p>{experience.description}</p>
          </Fragment>
        ))}
      </div>

      <S.GrayLine1></S.GrayLine1>
      <S.TxtAreaPromt> განათლება</S.TxtAreaPromt>
      <div>
        {educationForm.values.map((education, index) => (
          <Fragment key={index}>
            <p>{education.institute}</p>
            <p>{education.degree}</p>
            <p>{education.due_date}</p>
            <p>{education.description}</p>
          </Fragment>
        ))}
      </div>
    </S.ResumeWraper>
  );
};

export default Resume;
