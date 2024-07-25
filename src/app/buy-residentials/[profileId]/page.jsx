import Profile from "@/models/Profile";
import ProfileDetailsPage from "@/template/ProfileDetailsPage";
import connectDB from "@/utils/connectDB";

const ProfileDetails = async ({ params }) => {
  await connectDB();
  const { profileId } = params;
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return <ProfileDetailsPage data={profile} />;
};

export default ProfileDetails;

// SEO metaData
export const generateMetadata = async ({ params }) => {
  await connectDB();
  const { profileId } = params;
  const profile = await Profile.findOne({ _id: profileId });

  return {
    title: profile.title,
    description: profile.description,
  };
};
