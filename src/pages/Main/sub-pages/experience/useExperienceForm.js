import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ROUTES } from "../../../../constants";
import { useCustomForm } from "../useCustomForm";

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

const initialValues = [
  {
    position: "",
    employer: "",
    start_date: "",
    due_date: "",
    description: "",
  },
];

export const useExperienceForm = () => {
  const LOCAL_STORAGE_KEY = "experience";
  const navigate = useNavigate();

  return useCustomForm({
    storageKey: LOCAL_STORAGE_KEY,
    initialValues,
    validationSchema: ExperienceSchema,
    onSubmit: () => navigate(ROUTES.getMainEducationPath()),
  });
};
