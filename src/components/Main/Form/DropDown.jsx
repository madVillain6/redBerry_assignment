import React from "react";
import { Form } from "react-bootstrap";

const Dropdown = ({ placeHolder, options, name, value, onChange }) => {
  return (
    <Form.Select
      placeholder={placeHolder}
      aria-label="Default select example"
      name={name}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
};

export default Dropdown;
