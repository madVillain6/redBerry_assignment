import React, { useCallback } from "react";
import Back from "../../images/Group 4.svg";
import { useContext } from "react";
import { ROUTES } from "../../constants";
import { MainContext } from "../MainContext";
import * as S from "../../input";
import Dropdown from "./DropDown";
import { date } from "yup";

export default function Education() {
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
  return (
    <S.Wrapper>
      <S.Form>
        <S.HeadDiv>
          <S.HeadBtn /*</S.HeadDiv>onClick={() => navigate(ROUTES.landingPage)}*/
          >
            <img src={Back} alt="back" />
          </S.HeadBtn>
          <S.HeadSpan>განათლება</S.HeadSpan>
          <S.HeadSpan2>3/3</S.HeadSpan2>
        </S.HeadDiv>
        <S.BlackLine></S.BlackLine>
        <S.InputField>
          <S.Span1>სასწავლებელი</S.Span1>
          <S.StyledInput
            type="text"
            placeholder="თანამდებობა"
            size="lg"
            /*value={experiences[index].position}
            onChange={(e) =>
              updateExperience(index, "position", e.target.value)
            }
            <Dropdown options={options} />
            
            */
          />
          <S.Span2>მინიმუმ 2 სიმბოლო</S.Span2>
        </S.InputField>
        <S.SmInputField>
          <S.InputField>
            <S.Span1>ხარისხი</S.Span1>
            <S.SmInput type="date" />
          </S.InputField>
          <S.InputField>
            <S.Span1>დაწყების რიცხვი</S.Span1>
            <S.SmInput type="date" />
          </S.InputField>
        </S.SmInputField>
        <S.InputField>
          <S.Span1>აღწერა</S.Span1>
          <S.TextArea />
        </S.InputField>

        <S.GrayLine></S.GrayLine>
        <S.BlueBtn>მეტი გამოცდილების დამატება</S.BlueBtn>
        <S.NavDiv>
          <S.NavBtn>უკან</S.NavBtn>
          <S.NavBtn>დასრულება</S.NavBtn>
        </S.NavDiv>
      </S.Form>
    </S.Wrapper>
  );
}
