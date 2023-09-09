import * as Yup from "yup";

export const registerSchema = Yup.object({
    fullName: Yup.string()
        .required("Full name is required.")
        .min(3, "Full name must be at least 3 characters."),
    email: Yup.string().required("Email is required.").email("Email is invalid."),
    password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
        .required("Confirm password is required.")
        .oneOf([Yup.ref("password"), null], "Passwords must match."),
});