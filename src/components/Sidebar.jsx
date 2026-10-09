import { Link } from "react-router-dom";

export default function Sidebar({ sidebarOpen }) {
  return (
    <div className={`${sidebarOpen ? "block" : "hidden"} md:block w-64 bg-white shadow-md border-r min-h-screen`}>
      <div className="p-4 font-bold text-xl border-b text-blue-600">My Admin Panel</div>
      <nav className="flex flex-col p-4 space-y-2">
        <Link to="/admin/dashboard" className="p-2 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 font-medium">
          📊 Dashboard
        </Link>
        <Link to="/admin/about" className="p-2 hover:bg-blue-50 rounded text-gray-700 hover:text-blue-600 font-medium">
          ℹ️ About
        </Link>
        <hr className="my-2" />
        <Link to="/" className="p-2 hover:bg-gray-100 rounded text-gray-500 text-sm">
          ⬅️ Kembali ke Toko
        </Link>
      </nav>
    </div>
  );
}