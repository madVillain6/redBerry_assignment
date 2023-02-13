import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "../constants";
import Back from "../images/Group 4.svg";

const StyledBackButton = styled.img`
  position: absolute;
  top: 36px;
  left: 24px;
  border: none;
  background-color: #f9f9f900;
  text-decoration: none;
  border-radius: 50%;
  :hover {
    cursor: pointer;
    transform: scale(110%);
    transition: 0.5s;
    box-shadow: 0px 0px 2px #8f8f8f;
  }
`;

export const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    localStorage.clear();
    navigate(ROUTES.landingPage);
  }, [navigate]);

  return <StyledBackButton src={Back} alt="back" onClick={handleClick} />;
};
