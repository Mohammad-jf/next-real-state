import DashboardSideBar from "@/layout/DashboardSideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const layout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return (
    <>
      <DashboardSideBar>{children}</DashboardSideBar>
    </>
  );
};

export default layout;
