import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import AdminPage from "@/template/AdminPage";
import Profile from "@/models/Profile";

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });
  if (!user.role === "ADMIN") redirect("/dashboard");

  const profiles = await Profile.find({ published: false });

  return <AdminPage data={profiles} />;
};

export default Admin;
