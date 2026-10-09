import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";
import MyOrders from "./pages/frontpages/MyOrders";
import AdminDashboard from "./pages/Adminpages/AdminDashboard";
import AboutPage from "./pages/adminpages/AboutPage";

export default function App() {
  return (
    <Routes>
      {/* Toko Frontpage */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="orders" element={<MyOrders />} />
      </Route>

      {/* Admin Panel Backpage */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}