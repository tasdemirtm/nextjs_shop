import * as Yup from "yup";

export const categorySchema = Yup.object({
    categoryName: Yup.string()
    .required("Category Name is required.")
    .min(1, "Category Name must be at least 1 characters."),
    status: Yup.boolean().required("status is required.")
});