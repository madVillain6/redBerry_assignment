import React from "react";
import Back from "../../images/Group 4.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import { MainContext } from "../MainContext";
import * as S from "../../input";
import Dropdown from "./DropDown";
import Input from "../../input/Input";

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
  const options = [
    { value: "საშუალო სკოლის დიპლომი", label: "საშუალო სკოლის დიპლომი" },
    {
      value: "ზოგადსაგანმანათლებლო დიპლომი",
      label: "ზოგადსაგანმანათლებლო დიპლომი",
    },
    { value: "ბაკალავრი", label: "ბაკალავრი" },
    { value: "მაგისტრი", label: "მაგისტრი" },
    { value: "დოქტორი", label: "დოქტორი" },
    { value: "ასოცირებული ხარისხი", label: "ასოცირებული ხარისხი" },
    { value: "სტუდენტი", label: "სტუდენტი" },
    { value: "კოლეჯი (ხარისხის გარეშე)", label: "კოლეჯი (ხარისხის გარეშე)" },
    { value: "სხვა", label: "სხვა" },
  ];
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <S.Wrapper>
        <S.HeadDiv>
          <S.HeadBtn onClick={() => navigate(ROUTES.getMainExperiencePath())}>
            <img src={Back} alt="back" />
          </S.HeadBtn>
          <S.HeadSpan>განათლება</S.HeadSpan>
          <S.HeadSpan2>3/3</S.HeadSpan2>
        </S.HeadDiv>
        <S.BlackLine></S.BlackLine>

        {values.map((education, index) => {
          const itemErrors = errors[index] || {};
          const itemTouched = touched[index] || {};
          return (
            <form key={index}>
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

              <Dropdown
                options={options}
                placeholder={"ხარისხი"}
                name={`${index}.degree`}
                value={`${index}.degree`}
                onChange={handleChange}
              />

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
              <S.GrayLine></S.GrayLine>
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
      </S.Wrapper>
    </S.Wrapper>
  );
}
