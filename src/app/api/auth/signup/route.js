import { NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

export async function POST(req) {
    try {
        await connectDB();
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json(
                { error: 'لطفا اطلاعات معتبر وارد کنید' },
                { status: 422 })
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'کاربری با این ایمیل وجود دارد' }, { status: 422 })
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({ email, password: hashedPassword });
        console.log(user);
        return NextResponse.json({ message: 'حساب کاربری ایجاد شد', status: 'success' }, { status: 201 });


    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: 'مشکلی در سرور رخ داده است' }, { status: 500 })
    }
}