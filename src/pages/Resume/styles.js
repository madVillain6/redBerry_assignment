import styled from "styled-components";

export const Picture = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  left: 78%;
  top: 9%;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;
`;

export const NameBar = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #f93b1d;
`;

export const NameBarSmall = styled.h2`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #f93b1d;
`;

export const Contact = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #1a1a1a;
  display: flex;
`;

export const StyledP = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  max-width: 432px;
`;

export const StyledSpn = styled.span`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1a1a1a;
`;

export const DateSpn = styled.span`
  font-family: "Helvetica Neue";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #919191;
  margin-top: 8px;
`;

export const Paragraph = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: capitalize;
  color: #000000;
  margin-top: 16px;
`;
