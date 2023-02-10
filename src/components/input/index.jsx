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
