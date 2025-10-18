import { Outlet } from "react-router-dom";
import ShoppingHeader from "./Header";

const ShoppingLayout = () => {
  return (
    <div>
      <ShoppingHeader />
      <div>Shopping Layout</div>
      <Outlet />
    </div>
  );
};

export default ShoppingLayout;
