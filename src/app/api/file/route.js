import { writeFile } from "fs/promises"
import { NextResponse } from "next/server"

export async function POST(request) {
    const data = await request.formData()
    const file = data.get("file")
    console.log(file.name);

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const path = `public/images/${file.name}`
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)

    return NextResponse.json({ success: true })
}
