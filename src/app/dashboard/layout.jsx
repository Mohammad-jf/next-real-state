import DashboardSideBar from "@/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const layout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });
 
  if(!user) return <h3>مشکلی پیش امده است</h3>

  return (
    <>
      <DashboardSideBar admin={user.role === "ADMIN" ? true : false} email={user.email}>
        {children}
      </DashboardSideBar>
    </>
  );
};

export default layout;
