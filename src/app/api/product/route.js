import dbConnect from "@/lib/dbConnect";
import ProdcutsModels from "../../../../models/ProdcutsModels";
import { NextResponse } from "next/server";



export async function POST(request) {
    await dbConnect();
    const newProduct = await request.json();
    console.log(newProduct);
    await ProdcutsModels.create(newProduct.values);
    return NextResponse.json({ status: 200 })
}

export async function GET(request) {
    await dbConnect();
    const products = await ProdcutsModels.find();
    return NextResponse.json({products}, { status: 200 })
}

