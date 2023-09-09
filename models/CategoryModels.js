import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
        },
        status:{
            type:Boolean
        }

    },
    { timestamps: true }
);

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);