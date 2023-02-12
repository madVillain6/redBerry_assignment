import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ROUTES } from "../../../../constants";

const ERROR_MESSAGES = {
  min: "მინიმუმ 2 სიმბოლო",
  required: "აუცილებელი ველი",
};

const ExperienceItemSchema = Yup.object().shape({
  position: Yup.string(ERROR_MESSAGES.min)
    .min(2, ERROR_MESSAGES.min)
    .required(ERROR_MESSAGES.min),
  employer: Yup.string(ERROR_MESSAGES.min)
    .min(2, ERROR_MESSAGES.min)
    .required(ERROR_MESSAGES.min),
  start_date: Yup.date(ERROR_MESSAGES.required).required(
    ERROR_MESSAGES.required
  ),
  due_date: Yup.date(ERROR_MESSAGES.required).required(ERROR_MESSAGES.required),
  description: Yup.string(ERROR_MESSAGES.required).required(
    ERROR_MESSAGES.required
  ),
});

const ExperienceSchema = Yup.array().of(ExperienceItemSchema);

export const useExperienceForm = () => {
  const LOCAL_STORAGE_KEY = "experience";
  const navigate = useNavigate();

  const initialValues = useMemo(() => {
    const storedValues = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedValues
      ? JSON.parse(storedValues)
      : [
          {
            position: "",
            employer: "",
            start_date: "",
            due_date: "",
            description: "",
          },
        ];
  }, []);

  const form = useFormik({
    initialValues,
    onSubmit: () => navigate(ROUTES.getMainEducationPath()),
    validationSchema: ExperienceSchema,
    enableReinitialize: true,
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form.values));
  }, [form.values]);

  return form;
};
