import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const profiles = await Profile.find().select("-userId");
    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

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
      category,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      NextResponse.json(
        { error: "وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "کاربری با این ایمیل وجود ندارد" },
        { status: 404 }
      );
    }

    if (
      !title ||
      !description ||
      !location ||
      !phoneNumber ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطلاعات را به درستی وارد کنید" },
        { status: 400 }
      );
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
      userId: new Types.ObjectId(user._id),
    });

    console.log(newProfile);
    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      _id,
      title,
      description,
      location,
      phoneNumber,
      realState,
      price,
      constructionDate,
      amenities,
      rules,
      category,
    } = body;

    const session = await getServerSession(req);
    if (!session) {
      NextResponse.json(
        { error: "وارد حساب کاربری خود شوید" },
        { status: 401 }
      );
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "کاربری با این ایمیل وجود ندارد" },
        { status: 404 }
      );
    }

    if (
      !_id ||
      !title ||
      !description ||
      !location ||
      !phoneNumber ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "اطلاعات را به درستی وارد کنید" },
        { status: 400 }
      );
    }

    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId)) {
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است" },
        { status: 403 }
      );
    }

    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phoneNumber = phoneNumber;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;

    await profile.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت ویراش شد" },
      { status: 200 }
    );
  } catch (error) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
