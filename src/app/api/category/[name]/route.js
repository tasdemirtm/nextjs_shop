import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import ProdcutsModels from "../../../../../models/ProdcutsModels";

export async function GET(req, { params }) {
    await dbConnect();
    const products = await ProdcutsModels.find({ categories: params.name });
    return NextResponse.json({ products }, { status: 200 })
}