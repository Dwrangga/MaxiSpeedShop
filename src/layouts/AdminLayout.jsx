import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="md:hidden bg-white shadow p-4 flex justify-between items-center">
          <h1 className="font-bold">My Admin</h1>
          <button className="p-2 border rounded bg-gray-50" onClick={() => setSidebarOpen(!sidebarOpen)}>
            🍔 Menu
          </button>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <footer className="bg-white border-t p-4 text-center text-sm text-gray-500">
          © 2026 Admin Dashboard v1.0.0
        </footer>
      </div>
    </div>
  );
}