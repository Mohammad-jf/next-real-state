import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";




export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();
        const {
            title,
            description,
            location,
            phoneNumber,
            realState,
            price,
            constructionDate,
            amenities,
            rules,
            category } = body

        const session = await getServerSession(req);
        if (!session) {
            NextResponse.json({ error: "وارد حساب کاربری خود شوید" }, { status: 401 });
        }

        const user = await User.findOne({ email: session.user.email });
        if (!user) {
            return NextResponse.json(
                { error: 'کاربری با این ایمیل وجود ندارد' },
                { status: 404 })
        }


        if (!title ||
            !description ||
            !location ||
            !phoneNumber ||
            !realState ||
            !price ||
            !constructionDate ||
            !category) {
            return NextResponse.json(
                { error: "اطلاعات را به درستی وارد کنید" },
                { status: 400 })
        }

        const newProfile = await Profile.create({
            title,
            description,
            location,
            phoneNumber,
            realState,
            price: +price,
            constructionDate,
            amenities,
            rules,
            category,
            userId: new Types.ObjectId(user._id)
        })

        console.log(newProfile);
        return NextResponse.json({ message: 'آگهی جدید اضافه شد' }, { status: 201 });

    } catch (err) {
        console.log(err)
        return NextResponse.json(
            { error: "مشکلی در سرور رخ داده است" },
            { status: 500 })
    }
}