import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <h1>Welcome to Admin Panel</h1>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
