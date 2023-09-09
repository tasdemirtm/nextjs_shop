import dbConnect from '@/lib/dbConnect';
import User from '@/../models/User'
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function GET(request, { params }) {

    const id = params.id
    await dbConnect();
    try {
        const users = await User.findOne({ id: id });

        return NextResponse.json({ users }, { status: 200 })
    } catch (err) {
        console.log(err);
    }
}


export async function PUT(req, { params }) {
    const data = await req.json();

    await dbConnect();

    const user = await User.findById({ _id: data.userData._id });

    if (user.id === data.userData.id && user.id === params.id) {

        const isMAtch = await bcrypt.compare(data.values.oldPassword, user.password);
        if (isMAtch) {

            const salt = await bcrypt.genSalt(10);
            data.values.confirmPassword = await bcrypt.hash(data.values.confirmPassword, salt);
            data.values.password = await bcrypt.hash(data.values.password, salt);


            const newPassword = await {
                confirmPassword: data.values.confirmPassword,
                password: data.values.password,
            }

            await User.findByIdAndUpdate(user._id, newPassword, {
                new: true,
            });
            return NextResponse.json({ status: 200 })
        }
        else {

            return NextResponse.json({ message: "old password is invalid" }, { status: 400 })
        }
    }



}