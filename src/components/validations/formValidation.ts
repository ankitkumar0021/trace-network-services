import * as Yup from "yup";

export const signInValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
  remember: Yup.boolean(),
});
