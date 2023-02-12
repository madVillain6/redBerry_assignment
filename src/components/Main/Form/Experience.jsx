import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { MainContext } from "../MainContext";
import * as S from "../../input";
import Input from "../../input/Input";
import Back from "../../images/Group 4.svg";

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
    <S.Wrapper>
      <S.HeadDiv>
        <S.HeadBtn onClick={() => navigate(ROUTES.landingPage)}>
          <img src={Back} alt="back" />
        </S.HeadBtn>
        <S.HeadSpan>გამოცდილება</S.HeadSpan>
        <S.HeadSpan2>2/3</S.HeadSpan2>
      </S.HeadDiv>
      <S.BlackLine></S.BlackLine>
      {values.map((experience, index) => {
        const itemErrors = errors[index] || {};
        const itemTouched = touched[index] || {};
        return (
          <form key={index}>
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
          </form>
        );
      })}
      <S.GrayLine></S.GrayLine>
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
    </S.Wrapper>
  );
}
