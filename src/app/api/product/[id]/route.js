import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import ProdcutsModels from "../../../../../models/ProdcutsModels";

export async function DELETE(request, { params }) {
    await dbConnect();
    await ProdcutsModels.findByIdAndDelete(params.id);
    return NextResponse.json({ status: 200 })
}

export async function GET(req, { params }) {
    await dbConnect();
    const product = await ProdcutsModels.findById({ _id: params.id });
    return NextResponse.json({ product }, { status: 200 })
}
