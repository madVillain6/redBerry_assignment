import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ROUTES } from "../../../../constants";
import { useCustomForm } from "../useCustomForm";

const ERROR_MESSAGES = {
  name: "მინიმუმ 2 ასო, ქართული ასოები",
  surname: "მინიმუმ 2 ასო, ქართული ასოები",
  phone_number: "უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს",
  email: "უნდა მთავრდებოდეს @redberry.ge-ით",
  image: "ატვირთეთ სურათი",
};

const PersonalInfoSchema = Yup.object().shape({
  name: Yup.string(ERROR_MESSAGES.name)
    .matches(/^[ა-ჰ]+$/, ERROR_MESSAGES.name)
    .min(2, ERROR_MESSAGES.name)
    .required(ERROR_MESSAGES.name),
  surname: Yup.string(ERROR_MESSAGES.surname)
    .matches(/^[ა-ჰ]+$/, ERROR_MESSAGES.surname)
    .min(2, ERROR_MESSAGES.surname)
    .required(ERROR_MESSAGES.surname),
  about_me: Yup.string(),
  phone_number: Yup.string(ERROR_MESSAGES.phone_number)
    .matches(/^(\+995)?\d{9}$/, ERROR_MESSAGES.phone_number)
    .required(ERROR_MESSAGES.phone_number),
  email: Yup.string()
    .email(ERROR_MESSAGES.email)
    .test(
      ERROR_MESSAGES.email,
      ERROR_MESSAGES.email,
      (value) => typeof value === "string" && value.endsWith("@redberry.ge")
    )
    .required(ERROR_MESSAGES.email),
  image: Yup.string(ERROR_MESSAGES.image).required(ERROR_MESSAGES.image),
});

const initialValues = {
  name: "",
  surname: "",
  about_me: "",
  phone_number: "",
  email: "",
  image: "",
};

export const usePersonalInfoForm = () => {
  const LOCAL_STORAGE_KEY = "personalInfo";
  const navigate = useNavigate();

  return useCustomForm({
    storageKey: LOCAL_STORAGE_KEY,
    initialValues,
    validationSchema: PersonalInfoSchema,
    onSubmit: () => navigate(ROUTES.getMainExperiencePath()),
  });
};
