import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { StyledLabel } from "./styled";

const Input = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  touched,
  error,
}) => {
  const isFile = type === "file";
  const isTextarea = type === "textarea";

  return (
    <Form.Group>
      <StyledLabel error={touched && error}>{label}</StyledLabel>

      {isFile && (
        <Button>
          <label htmlFor={name}>{placeholder}</label>
        </Button>
      )}

      <FormControl
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={isFile ? undefined : value}
        onChange={onChange}
        accept={isFile ? "image/png, image/jpeg" : undefined}
        style={{ display: isFile ? "none" : "block" }}
        isInvalid={touched && error}
        as={isTextarea ? "textarea" : undefined}
      />

      {touched && error && <div>{error}</div>}
    </Form.Group>
  );
};

export default Input;
