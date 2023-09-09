import dbConnect from '@/lib/dbConnect';
import User from '@/../models/User'
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    try {
        const users = await User.find();
        return NextResponse.json(users);
    } catch (err) {
        console.log(err);
    }
}


export async function POST(request) {
    const newUser = await request.json();
    await dbConnect();
    await User.create(newUser);
    return NextResponse.json(newUser);
  }