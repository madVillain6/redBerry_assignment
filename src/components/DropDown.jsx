import React from "react";
import { Form } from "react-bootstrap";

const Dropdown = ({ placeholder, options, name, value, onChange }) => {
  return (
    <Form.Group>
      <Form.Label htmlFor={name}>{placeholder}</Form.Label>
      <Form.Select
        placeholder={placeholder}
        aria-label="Default select example"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default Dropdown;
