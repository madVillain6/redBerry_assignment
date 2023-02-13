import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
`;

export const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  padding: 0 60px;
  box-sizing: border-box;
`;

export const MainRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  max-width: 800px;
  min-width: 600px;
  background-color: white;
  box-sizing: border-box;
`;
