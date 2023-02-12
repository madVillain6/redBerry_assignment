import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ROUTES } from "../constants";

const ERROR_MESSAGES = {
  min: "მინიმუმ 2 სიმბოლო",
  required: "აუცილებელი ველი",
};

const EducationItemSchema = Yup.object().shape({
  institute: Yup.string(ERROR_MESSAGES.min)
    .min(2, ERROR_MESSAGES.min)
    .required(ERROR_MESSAGES.min),
  degree: Yup.string(ERROR_MESSAGES.min)
    .min(2, ERROR_MESSAGES.min)
    .required(ERROR_MESSAGES.min),

  due_date: Yup.date(ERROR_MESSAGES.required).required(ERROR_MESSAGES.required),
  description: Yup.string(ERROR_MESSAGES.required).required(
    ERROR_MESSAGES.required
  ),
});

const EducationSchema = Yup.array().of(EducationItemSchema);

export const useEducationForm = () => {
  const LOCAL_STORAGE_KEY = "education";
  const navigate = useNavigate();

  const initialValues = useMemo(() => {
    const storedValues = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedValues
      ? JSON.parse(storedValues)
      : [
          {
            institute: "",
            degree: "",
            due_date: "",
            description: "",
          },
        ];
  }, []);

  const form = useFormik({
    initialValues,
    onSubmit: () => navigate(ROUTES.getMainResumePath()),
    validationSchema: EducationSchema,
    enableReinitialize: true,
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form.values));
  }, [form.values]);

  return form;
};
