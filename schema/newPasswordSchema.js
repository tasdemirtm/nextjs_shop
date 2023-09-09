import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
    oldPassword: Yup.string().required("Password is required."),
    password: Yup.string()
        .required("Password is required.")
        .min(8, "Password must be at least 8 characters.")
        .matches(/(?=.*[0-9])/, "Password must contain a number."),
    confirmPassword: Yup.string()
        .required("Confirm password is required.")
        .oneOf([Yup.ref("password"), null], "Passwords must match."),
});