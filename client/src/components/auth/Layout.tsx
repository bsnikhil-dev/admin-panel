import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <nav className="px-10 py-2 bg-gray-100">
        <img className="w-15 h-15 rounded-full" src={logo} />
      </nav>
      <hr className="border-t border-gray-100" />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="border-t border-gray-100 py-7 text-sm bg-gray-100">
        <div className="text-center text-gray-500">
          © 2025 Rental, Inc. · Privacy · Terms · Sitemap · Company details
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
