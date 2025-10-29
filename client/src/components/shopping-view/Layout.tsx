import { Outlet } from 'react-router-dom';
import ShoppingHeader from './Header';

const ShoppingLayout = () => {
  return (
    <div>
      <ShoppingHeader />
      <Outlet />
    </div>
  );
};

export default ShoppingLayout;
