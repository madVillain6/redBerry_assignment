import React, { useCallback } from "react";
import Form from "react-bootstrap/Form";
import Back from "../../images/Group 4.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ROUTES } from "../../constants";
import { MainContext } from "../MainContext";

export default function Experience() {
  const navigate = useNavigate();
  const { experiences, updateExperience, addExperience } =
    useContext(MainContext);

  return (
    <div>
      {experiences.map((experience, index) => (
        <Form key={index}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="თანამდებობა"
              size="lg"
              value={experiences[index].position}
              onChange={(e) =>
                updateExperience(index, "position", e.target.value)
              }
            />
            <br />
            <Form.Control
              type="text"
              placeholder="დამსაქმებელი"
              size="lg"
              value={experiences[index].employer}
              onChange={(e) =>
                updateExperience(index, "employer", e.target.value)
              }
            />
            <br />
          </Form.Group>
          <Form.Control
            type="date"
            placeholder="დაწყების თარიღი"
            size="sm"
            value={experiences[index].startDate}
            onChange={(e) =>
              updateExperience(index, "startDate", e.target.value)
            }
          />
          <Form.Control
            type="date"
            placeholder="დამთავრების თარიღი"
            size="sm"
            value={experiences[index].endDate}
            onChange={(e) => updateExperience(index, "endDate", e.target.value)}
          />
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>აღწერა</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              value={experiences[index].description}
              onChange={(e) =>
                updateExperience(index, "description", e.target.value)
              }
            />
          </Form.Group>
        </Form>
      ))}
      <div></div>
      <button onClick={() => addExperience()}>
        მეტი გამოცდილების დამატება
      </button>
      <div>
        <button>უკან</button>
        <button>შემდეგი</button>
      </div>
    </div>
  );
}
