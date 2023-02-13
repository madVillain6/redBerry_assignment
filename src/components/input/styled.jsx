import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const StyledLabel = styled(Form.Label)`
  color: ${({ error }) => (error ? "#E52F2F" : "#000000")};
`;
