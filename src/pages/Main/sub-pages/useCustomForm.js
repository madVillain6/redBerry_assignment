import { useFormik } from "formik";
import { useEffect, useMemo } from "react";

export const useCustomForm = ({
  storageKey,
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  const _initialValues = useMemo(() => {
    const storedValues = localStorage.getItem(storageKey);
    return storedValues ? JSON.parse(storedValues) : initialValues;
  }, [initialValues, storageKey]);

  const form = useFormik({
    initialValues: _initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem(storageKey, JSON.stringify(form.values));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [form.values, storageKey]);

  return form;
};
