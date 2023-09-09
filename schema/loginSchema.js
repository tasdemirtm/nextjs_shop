import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
        /(?=.*[0-9])/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character."
    ),
});