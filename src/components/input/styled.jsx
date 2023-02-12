import styled from "styled-components";

export const StyledInput = styled.input`
  display: ${({ type }) => type === "file" && "none"};
`;

export const StyledSpan = styled.span`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: ${({ error }) => (error ? "#E52F2F" : "#000000")};
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
