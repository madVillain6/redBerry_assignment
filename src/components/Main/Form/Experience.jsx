import React, { useCallback } from "react";
import Back from "../../images/Group 4.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ROUTES } from "../../constants";
import { MainContext } from "../MainContext";
import * as S from "../../input";

export default function Experience() {
  const navigate = useNavigate();
  const { experiences, updateExperience, addExperience } =
    useContext(MainContext);
  return (
    <S.Wrapper>
      <S.Form>
        <S.HeadDiv>
          <S.HeadBtn onClick={() => navigate(ROUTES.landingPage)}>
            <img src={Back} alt="back" />
          </S.HeadBtn>
          <S.HeadSpan>გამოცდილება</S.HeadSpan>
          <S.HeadSpan2>2/3</S.HeadSpan2>
        </S.HeadDiv>
        <S.BlackLine></S.BlackLine>
        {experiences.map((experience, index) => (
          <form key={index}>
            <S.InputField>
              <S.Span1>თანამდებობა</S.Span1>
              <S.StyledInput
                type="text"
                placeholder="თანამდებობა"
                size="lg"
                value={experiences[index].position}
                onChange={(e) =>
                  updateExperience(index, "position", e.target.value)
                }
              />
              <S.Span2>მინიმუმ 2 სიმბოლო</S.Span2>
            </S.InputField>
            <S.InputField>
              <S.Span1>დამსაქმებელი</S.Span1>
              <S.StyledInput
                type="text"
                placeholder="დამსაქმებელი"
                size="lg"
                value={experiences[index].employer}
                onChange={(e) =>
                  updateExperience(index, "employer", e.target.value)
                }
              />
              <S.Span2>მინიმუმ 2 სიმბოლო</S.Span2>
            </S.InputField>
            <S.SmInputField>
              <S.InputField>
                <S.Span1>დაწყების რიცხვი</S.Span1>
                <S.SmInput
                  type="date"
                  size="sm"
                  value={experiences[index].startDate}
                  onChange={(e) =>
                    updateExperience(index, "startDate", e.target.value)
                  }
                />
              </S.InputField>
              <S.InputField>
                <S.Span1>დამთავრების რიცხვი</S.Span1>
                <S.SmInput
                  type="date"
                  size="sm"
                  value={experiences[index].endDate}
                  onChange={(e) =>
                    updateExperience(index, "endDate", e.target.value)
                  }
                />
              </S.InputField>
            </S.SmInputField>
            <S.InputField controlId="exampleForm.ControlTextarea1">
              <S.Span1>აღწერა</S.Span1>
              <S.TextArea
                as="textarea"
                rows={5}
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                value={experiences[index].description}
                onChange={(e) =>
                  updateExperience(index, "description", e.target.value)
                }
              />
            </S.InputField>
          </form>
        ))}
        <S.GrayLine></S.GrayLine>
        <S.BlueBtn onClick={() => addExperience()}>
          მეტი გამოცდილების დამატება
        </S.BlueBtn>
        <S.NavDiv>
          <S.NavBtn>უკან</S.NavBtn>
          <S.NavBtn>შემდეგი</S.NavBtn>
        </S.NavDiv>
      </S.Form>
    </S.Wrapper>
  );
}
