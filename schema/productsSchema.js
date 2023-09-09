import * as Yup from "yup";

export const productsSchema = Yup.object({
    productName: Yup.string().required("Product Name is required.").min(3, "Product Name must be at least 1 characters."),
    status: Yup.boolean().required("status is required."),
    categoryId: Yup.string().required("Category Id is required."),
    price: Yup.number().required("Price Id is required."),
    size: Yup.string().required("size Id is required."),
    description: Yup.string().required("description Id is required."),
    categories: Yup.string(),
    brand: Yup.string().required("brand Id is required."),
    photo: Yup.string().required("photo Id is required."),
    img: Yup.string(),
});