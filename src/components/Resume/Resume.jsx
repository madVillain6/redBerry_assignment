import React, { useContext } from "react";
import { MainContext } from "../Main/MainContext";

const Resume = () => {
  const { experiences, personalInfoForm } = useContext(MainContext);

  return (
    <div>
      <h1>Resume!</h1>

      <p>Name: {personalInfoForm.values.name}</p>
      <p>Last name: {personalInfoForm.values.surname}</p>

      {experiences.map((experience, index) => (
        <p key={index}>{experience.position}</p>
      ))}
    </div>
  );
};

export default Resume;
