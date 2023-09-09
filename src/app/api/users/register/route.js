import User from '@/../models/User'
import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(request) {

  await dbConnect();
  const newUser = await request.json();

  const users = await User.find({ email: newUser.email });

  if (users.length !== 0) {
    return request.status(400)
  }
  else {
    try {
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(newUser.password, salt);
      newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
      await User.create(newUser);
      return NextResponse.json(newUser);
    } catch (error) {
      console.log(err);
    }
  }

}

export async function PUT(req) {
  await dbConnect();

  const data = await req.json();

  const newuser = await {
      name: data.values.fullName,
      phoneNumber: data.values.phoneNumber,
      email: data.values.email,
      address: data.values.address,
      province: data.values.province,
      county: data.values.county,
  }

   await User.findByIdAndUpdate(data.userData._id, newuser, {
      new: true,
  });

  return NextResponse.json({ status: 200 })
}