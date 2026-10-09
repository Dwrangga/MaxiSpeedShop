import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, LayoutDashboard, PackageCheck } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Brand Name */}
      <Link to="/" className="font-bold text-xl flex items-center gap-2 text-yellow-400">
        🏍️ MaxiSpeedShop
      </Link>

      {/* Menu Navigasi Utama */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-yellow-400">
          Katalog Variasi
        </Link>
        <Link to="/orders" className="hover:text-yellow-400 flex items-center gap-1">
          <PackageCheck size={18} />
          Pesanan Saya
        </Link>
        <Link to="/cart" className="hover:text-yellow-400 relative flex items-center gap-1">
          <ShoppingCart size={18} />
          Keranjang
          {totalItems > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1">
              {totalItems}
            </span>
          )}
        </Link>
        <Link to="/checkout" className="hover:text-yellow-400">
          Checkout
        </Link>
        <Link 
          to="/admin/dashboard" 
          className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-semibold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors"
        >
          <LayoutDashboard size={15} /> Admin Panel
        </Link>
      </div>
    </nav>
  );
}