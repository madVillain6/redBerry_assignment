import styled, { css } from "styled-components";

const Font = css`
  font-family: "Helvetica Neue";
  font-style: normal;
`;

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
`;

export const HeaderTitle = styled.span`
  ${Font}
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1a1a1a;
`;

export const StepIndicator = styled.span`
  ${Font}
  margin-left: auto;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;
