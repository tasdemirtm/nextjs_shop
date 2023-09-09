import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import bcrypt from "bcryptjs";


export async function POST(req) {

    const { username, password } = await req.json();

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {

        const salt = await bcrypt.genSalt(10);
        const token = await bcrypt.hash(process.env.ADMIN_TOKEN, salt);

        cookies().set({
            name: 'token',
            value: token,
            path: '/',
            maxAge: 60 * 60,
            secure: true
        })
        return NextResponse.json({ message: 'Success' }, { status: 200 })
    }
    else {
        return NextResponse.json({ message: 'Wrong Credentials' }, { status: 400 })
    }
}

export async function GET() {

    const cookieTtoken = await cookies().get("token")?.value
    const adminToken = process.env.ADMIN_TOKEN

    const isMAtch = await bcrypt.compare(adminToken, cookieTtoken);

    if(isMAtch){
        return NextResponse.json({ status: isMAtch }, { status: 200 })
    }
    else{
        return NextResponse.json({ status: 400 })
    }
    
}


export async function PUT(req) {
    cookies().delete("token")
    return NextResponse.json({ message: 'Success' }, { status: 200 })
}
