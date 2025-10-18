import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthLayout from "./components/auth/Layout";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/Layout";
import AdminDashboardPage from "./pages/admin-view/DashBoardPage";
import AdminOrdersdPage from "./pages/admin-view/OrdersPage";
import AdminProductsdPage from "./pages/admin-view/ProductsPage";
import ShoppingLayout from "./components/shopping-view/Layout";
import NotFoundPage from "./pages/not-found";
import HomePage from "./pages/shopping-view/Home";
import CheckOutPage from "./pages/shopping-view/Checkout";
import ListingPage from "./pages/shopping-view/Listing";
import AccountPage from "./pages/shopping-view/Account";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboardPage />} />
        <Route path="orders" element={<AdminOrdersdPage />} />
        <Route path="products" element={<AdminProductsdPage />} />
      </Route>
      <Route path="/shop" element={<ShoppingLayout />}>
        <Route path="home" element={<HomePage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="listing" element={<ListingPage />} />
        <Route path="account" element={<AccountPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
