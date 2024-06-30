import DashboardSideBar from "@/layout/DashboardSideBar";

const layout = ({ children }) => {
  return (
    <>
      <DashboardSideBar>{children}</DashboardSideBar>
    </>
  );
};

export default layout;
