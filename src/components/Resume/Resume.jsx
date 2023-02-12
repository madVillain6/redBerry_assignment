import React, { useContext } from "react";
import { MainContext } from "../Main/MainContext";
import * as S from "../../components/input";

const Resume = () => {
  const { experiences, personalInfoForm } = useContext(MainContext);

  return (
    <S.ResumeWraper>
      <S.AboutMe>
        <S.Div>
          <S.NameBar>
            {personalInfoForm.values.name} {personalInfoForm.values.surname}
          </S.NameBar>
          <S.Contact> &#64; {personalInfoForm.values.email}</S.Contact>
          <S.Contact> &#128222; {personalInfoForm.values.mobile}</S.Contact>
          <div></div>
          <S.TxtAreaPromt>ჩემს შესახებ</S.TxtAreaPromt>
          <S.TxtArea>{personalInfoForm.values.aboutMe}</S.TxtArea>
        </S.Div>
        <S.Picture></S.Picture>
      </S.AboutMe>

      <S.GrayLine1></S.GrayLine1>
      <div>
        <S.TxtAreaPromt>გამოცდილება </S.TxtAreaPromt>
        {experiences.map((experience, index) => (
          <p key={index}>{experience.position}</p>
        ))}
        <span>React Native Developer, Microsoft</span>
        <br />
        <span>2020-09-23 - 2020-09-23</span>
        <S.TxtArea>
          Experienced Javascript Native Developer with 5 years in the industry.
          proficient withreact. Used problem-solving aptitude to encahge
          application performance by 14%.created data visualisation tools and
          integrated designs.{" "}
        </S.TxtArea>
      </div>
      <S.GrayLine1></S.GrayLine1>
      <S.TxtAreaPromt> განათლება</S.TxtAreaPromt>
      <span>წმ. ანდრიას საპატრიარქოს სასწავლებელი, სტუდენტი</span>
      <span>2020-09-23 - 2020-09-23</span>
      <S.TxtArea>
        Experienced Javascript Native Developer with 5 years in the industry.
        proficient withreact. Used problem-solving aptitude to encahge
        application performance by 14%.created data visualisation tools and
        integrated designs.{" "}
      </S.TxtArea>
    </S.ResumeWraper>
  );
};

export default Resume;
