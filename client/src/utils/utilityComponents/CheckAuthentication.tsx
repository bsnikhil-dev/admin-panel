import { Navigate, useLocation } from "react-router-dom";
import type { CheckAuthenticationProps } from "../../types";

const CheckAuthentication = ({
  isAuthenticated,
  userDetails,
  children,
}: CheckAuthenticationProps) => {
  const location = useLocation();

  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/register")
    )
  ) {
    return <Navigate to="/auth/login" />;
  }

  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/register"))
  ) {
    return userDetails.role === "admin" ? (
      <Navigate to="/admin/dashboard" />
    ) : (
      <Navigate to="/shop/home" />
    );
  }

  if (
    isAuthenticated &&
    userDetails.role !== "admin" &&
    location.pathname.includes("admin")
  ) {
    return <Navigate to="/unauthorized" />;
  }

  if (
    isAuthenticated &&
    userDetails.role === "admin" &&
    location.pathname.includes("shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }
  return children;
};

export default CheckAuthentication;
