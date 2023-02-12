import React from "react";
import { StyledInput, StyledSpan } from "./styled";

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
  return (
    <div className="submit-field">
      <StyledSpan error={touched && error}>{label}</StyledSpan>

      {type === "file" && <label htmlFor={name}>{placeholder}</label>}

      <StyledInput
        className="inp-1"
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        value={type === "file" ? undefined : value}
        onChange={onChange}
        accept={type === "file" ? "image/png, image/jpeg" : undefined}
      />

      {touched && error && <span className="spn-4">{error}</span>}
    </div>
  );
};

export default Input;
