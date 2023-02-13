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
        <option value="">აირჩიეთ ხარისხი</option>
        {/* little hack to save id and title together */}
        {options.map((option) => (
          <option key={option.id} value={`${option.id}:${option.title}`}>
            {option.title}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default Dropdown;
