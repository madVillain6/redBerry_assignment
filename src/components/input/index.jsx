import { hover } from "@testing-library/user-event/dist/hover";
import styled, { css } from "styled-components";

const flex = css`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${flex}
  border: 1px solid #000;
  background-color: whitesmoke;
  color: ${({ type }) => (type === "email" ? "red" : "green")};
`;

export const HeadSpan = styled.span`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-left: 7px;
`;
export const HeadDiv = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;
export const HeadBtn = styled.button`
  position: absolute;
  left: 10px;
  border: none;
  background-color: #f9f9f900;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(110%);
    transition: 0.5s;
  }
`;

export const HeadDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  margin-right: 70px;
`;

export const BlackLine = styled.div`
  border: 1px solid black;
  width: 100%;
  margin-bottom: 77px;
  margin-left: 7px;
`;
export const HeadSpan2 = styled.span`
  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #1a1a1a;
  margin-right: -12px;
`;

export const Form = styled.form`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 20px;
  max-width: 800px;
  -webkit-align-items: baseline;
  -webkit-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: stretch;
  width: 801px;
  margin-left: 150px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;
  background-color: #f9f9f9;
  align-items: baseline;
`;
export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  align-items: baseline;
`;
export const Span1 = styled.span`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
`;
export const Span2 = styled.span`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #2e2e2e;
`;
export const StyledInput = styled.input`
  width: 798px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  margin-top: 8px;
  margin-bottom: 8px;
`;
export const SmInputField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SmInput = styled.input`
  box-sizing: border-box;
  width: 379px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  margin-right: 6px;
  margin-left: 22px;
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 798px;
  height: 123px;
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  margin-top: 8px;
`;
export const GrayLine = styled.div`
  border: 1px solid #c1c1c1;
  width: 100%;
  margin-top: 58px;
  margin-bottom: 49px;
  margin-left: 7px;
`;

export const BlueBtn = styled.button`
  width: 289px;
  height: 48px;
  background-color: #62a1eb;
  border: none;
  color: white;
  gap: 20px;
  margin-top: 45px;
  border-radius: 4px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
export const NavBtn = styled.button`
  background-color: #6b40e3;
  border-radius: 4px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.08em;
  color: #ffffff;
  border: none;
  width: 30%;
  height: 48px;
`;
export const NavDiv = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
`;
export const DropContainer = styled.div`
  box-sizing: border-box;
  width: 371px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
`;
export const DropInput = styled.div`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
`;
export const DropMenu = styled.div`
  transform: translateY(4px);
  width: 100%;
  border: 1px solid #bcbcbc;
  border-radius: 5px;
  overflow: auto;
  max-height: 150px;
  background-color: #bcbcbc;
`;

export const DropItem = styled.div`
  padding: 5px;
  cursor: pointer;
  :hover {
    background-color: #62a1eb;
  }
`;

export const NameBar = styled.h1`
  font-family: "Helvetica Neue";
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #f93b1d;
`;

export const ResumeWraper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  height: 100%;
  background-color: white;
  align-items: baseline;
  background-color: white;
  margin-top: 50px;
  margin-right: 75px;
  max-width: 822px;
`;

export const Contact = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #1a1a1a;
`;
export const TxtAreaPromt = styled.h2`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #f93b1d;
`;

export const TxtArea = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  max-width: 432px;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Picture = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  border-radius: 133px;
  background-color: green;
  position: absolute;
  left: 78%;
  top: 9%;
`;
export const GrayLine1 = styled.div`
  border: 1px solid #c1c1c1;
  width: 100%;
  margin-top: 58px;
  margin-bottom: 49px;
  margin-left: 7px;
`;

export const Div = styled.div`
  position: relative;
`;
