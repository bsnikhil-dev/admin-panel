import { Outlet } from "react-router-dom";
import AdminHeader from "./header.tsx";
import AdminSideBar from "./sideBar.tsx";

const AdminLayout = () => {
  return (
    <div>
      <AdminSideBar />
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
