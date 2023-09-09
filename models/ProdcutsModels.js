import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
        },
        categoryId: {
            type: String,
        },
        status: {
            type: Boolean,
        },
        price: {
            type: Number,
        },
        description: {
            type: String,
        },
        categories: {
            type: String,
        },
        brand: {
            type: String,
        },
        size: {
            type: String,
        },
        img: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model("Product", ProductSchema);
