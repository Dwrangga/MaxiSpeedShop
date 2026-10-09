import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-1 container mx-auto p-6">
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-gray-400 text-center p-4 border-t border-slate-800 text-sm">
        <p>© 2026 NMAX Zone 155 | Specialist Variasi & Accessories Yamaha NMAX</p>
      </footer>
    </div>
  );
}