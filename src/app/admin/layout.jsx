import DashboardSideBar from "@/layout/DashboardSideBar";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const layout = async ({ children }) => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });

  return (
    <DashboardSideBar admin={user.role} email={user.email}>
      {children}
    </DashboardSideBar>
  );
};

export default layout;
