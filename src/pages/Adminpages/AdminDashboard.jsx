import { useOrders } from "../../context/OrderContext";
import { Package, ShoppingBag, DollarSign, Clock } from "lucide-react";

export default function AdminDashboard() {
  const { orders } = useOrders();

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Admin NMAX Zone</h1>
          <p className="text-slate-500 text-sm">Kelola data produk variasi NMAX 155 dan pantau transaksi pembeli.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium">Total Katalog Produk</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">6 Produk</p>
          </div>
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Package size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium">Total Pesanan Masuk</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">{totalOrders} Pesanan</p>
          </div>
          <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
            <ShoppingBag size={24} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-sm font-medium">Total Omset Pendapatan</p>
            <p className="text-2xl font-extrabold text-slate-900 mt-1">
              Rp {totalRevenue.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
            <DollarSign size={24} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Clock size={20} className="text-yellow-500" />
          Daftar Pesanan Masuk (Checkout)
        </h2>

        {orders.length === 0 ? (
          <p className="text-slate-500 text-center py-8">Belum ada pesanan yang di-checkout oleh pembeli.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 border-b text-slate-600 font-semibold">
                  <th className="p-3">ID Pesanan</th>
                  <th className="p-3">Tanggal</th>
                  <th className="p-3">Pembeli & Alamat</th>
                  <th className="p-3">Rincian Variasi NMAX</th>
                  <th className="p-3">Metode Bayar</th>
                  <th className="p-3">Total Bayar</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-slate-900">{order.id}</td>
                    <td className="p-3 text-slate-500 whitespace-nowrap">{order.date}</td>
                    <td className="p-3">
                      <p className="font-bold text-slate-800">{order.customer}</p>
                      <p className="text-xs text-slate-500 max-w-xs">{order.address}</p>
                    </td>
                    <td className="p-3">
                      <ul className="space-y-1">
                        {order.items.map((item, idx) => (
                          <li key={idx} className="text-xs text-slate-700">
                            • {item.name} <span className="font-semibold text-slate-900">({item.quantity}x)</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-3 text-slate-600 text-xs">{order.paymentMethod}</td>
                    <td className="p-3 font-extrabold text-slate-900 whitespace-nowrap">
                      Rp {order.total.toLocaleString("id-ID")}
                    </td>
                    <td className="p-3">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          order.status === "Selesai"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}