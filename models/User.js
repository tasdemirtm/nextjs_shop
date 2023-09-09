import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        id: {
            type: String,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
        },
        address: {
            type: String,
        },
        province: {
            type: String,
        },
        county: {
            type: String,
        },
        password: {
            type: String,
            required: true,
        },
        confirmPassword: {
            type: String,
            required: true,
        },
        emailVerified: {
            type: String,
            default: null,
        },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);