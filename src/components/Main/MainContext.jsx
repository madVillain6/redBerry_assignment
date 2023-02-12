import { createContext, useCallback, useState } from "react";
import { useExperienceForm } from "./useExperienceForm";
import { useEducationForm } from "./useEducationForm";
import { usePersonalInfoForm } from "./usePersonalInfoForm";

export const MainContext = createContext({
  personalInfoForm: { values: {}, errors: {}, touched: {} },
  imagePreview: undefined,
  handleImageUplad: () => {},
  experienceForm: { values: {}, errors: {}, touched: {} },
  educationForm: { values: {}, errors: {}, touched: {} },
});

const MainProvider = ({ children }) => {
  const [imagePreview, setImagePreview] = useState(
    localStorage.getItem("image") || ""
  );

  const handleImageUplad = useCallback((file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      localStorage.setItem("image", reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const personalInfoForm = usePersonalInfoForm();

  const experienceForm = useExperienceForm();

  const educationForm = useEducationForm();

  return (
    <MainContext.Provider
      value={{
        personalInfoForm,
        imagePreview,
        handleImageUplad,
        experienceForm,
        educationForm,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
