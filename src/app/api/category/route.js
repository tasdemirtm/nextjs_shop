import dbConnect from "@/lib/dbConnect";
import CategoryModels from "../../../../models/CategoryModels";
import { NextResponse } from "next/server";



export async function POST(request) {
    const newCategory = await request.json();
    await dbConnect();
    await CategoryModels.create(newCategory.values);
    return NextResponse.json({ status: 200 })
}

export async function GET() {
    await dbConnect();
    const categories = await CategoryModels.find();
    return NextResponse.json({categories}, { status: 200 })
}

