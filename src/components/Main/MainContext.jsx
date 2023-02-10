import { useFormik } from "formik";
import { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ROUTES } from "../constants";

const getDefaultExperience = () => ({
  position: "",
  employer: "",
  startDate: "",
  endDate: "",
  description: "",
});

const PersonalInfoSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too Short").required("Required"),
  surname: Yup.string().min(2, "Too Short").required("Required"),
  aboutMe: Yup.string(),
  mobile: Yup.string().min(9).max(13),
  email: Yup.string().email("Invalid email address"),
});

export const MainContext = createContext({
  experiences: [],
  addExperience: () => {},
  updateExperience: () => {},
  personalInfoForm: { values: {}, errors: {} },
});

const MainProvider = ({ children }) => {
  const navigate = useNavigate();

  const [experiences, setExperiences] = useState([getDefaultExperience()]);

  const addExperience = useCallback(() => {
    setExperiences([...experiences, getDefaultExperience()]);
  }, [experiences]);

  const updateExperience = useCallback(
    (index, field, value) => {
      experiences[index][field] = value;
      setExperiences([...experiences]);
    },
    [experiences]
  );

  const personalInfoForm = useFormik({
    initialValues: {
      name: "",
      surname: "",
      aboutMe: "",
      mobile: "",
      email: "",
    },
    onSubmit: () => navigate(ROUTES.getMainExperiencePath()),
    validationSchema: PersonalInfoSchema,
  });

  return (
    <MainContext.Provider
      value={{
        experiences,
        addExperience,
        updateExperience,
        personalInfoForm,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
