import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ROUTES } from "../../../../constants";
import { useCustomForm } from "../useCustomForm";
import { apiSubmitResume } from "../../../../api";

const ERROR_MESSAGES = {
  min: "მინიმუმ 2 სიმბოლო",
  required: "აუცილებელი ველი",
};

const EducationItemSchema = Yup.object().shape({
  institute: Yup.string(ERROR_MESSAGES.min)
    .min(2, ERROR_MESSAGES.min)
    .required(ERROR_MESSAGES.min),
  degree: Yup.string(ERROR_MESSAGES.min).required(ERROR_MESSAGES.min),
  due_date: Yup.date(ERROR_MESSAGES.required).required(ERROR_MESSAGES.required),
  description: Yup.string(ERROR_MESSAGES.required).required(
    ERROR_MESSAGES.required
  ),
});

const EducationSchema = Yup.array().of(EducationItemSchema);

const initialValues = [
  {
    institute: "",
    degree: "",
    due_date: "",
    description: "",
  },
];

export const useEducationForm = ({ personalData, experienceData }) => {
  const LOCAL_STORAGE_KEY = "education";
  const navigate = useNavigate();

  const educationData = useCustomForm({
    storageKey: LOCAL_STORAGE_KEY,
    initialValues,
    validationSchema: EducationSchema,
    onSubmit: async () => {
      const imageb64 = localStorage.getItem("image");
      const image = await fetch(imageb64).then((res) => res.blob());

      await apiSubmitResume({
        ...personalData,
        image: image,
        experiences: experienceData,
        educations: educationData.values.map(({ degree, ...item }) => ({
          ...item,
          degree_id: parseInt(degree.split(":")[0]),
        })),
      });

      localStorage.clear();

      navigate(ROUTES.getMainResumePath());
    },
  });

  return educationData;
};
