import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Profile from "@/models/Profile";
import User from "@/models/User";
import MyProfilesPage from "@/template/MyProfilesPage";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth"

const MyProfiles = async () => {
    await connectDB();
    const session = await getServerSession(authOptions);
    const { email } = session.user
    const user = await User.findOne({ email });
    const profiles = await Profile.find({ userId: user._id });

    // alternative way
    // const user = await User.aggregate([{ $match: { email } },
    // {
    //     $lookup: {
    //         from: "profiles",
    //         foreignField: "userId",
    //         localField: '_id',
    //         as: 'profiles'
    //     }
    // }]);


    return (
        <MyProfilesPage profiles={profiles} />
    )
}

export default MyProfiles

