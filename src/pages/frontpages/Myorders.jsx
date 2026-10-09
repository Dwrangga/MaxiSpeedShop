import { useOrders } from "../../context/OrderContext";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft, Clock, CheckCircle } from "lucide-react";

export default function MyOrders() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow border text-center max-w-md mx-auto my-12">
        <div className="p-4 bg-yellow-50 text-yellow-600 rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
          <ShoppingBag size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Belum Ada Pesanan</h2>
        <p className="text-slate-500 text-sm mb-6">Kamu belum memiliki riwayat pesanan variasi NMAX.</p>
        <Link to="/" className="inline-block bg-slate-900 text-yellow-400 font-bold px-6 py-3 rounded-xl shadow hover:bg-slate-800">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Riwayat Pesanan Saya</h1>
          <p className="text-slate-500 text-sm">Daftar pesanan variasi NMAX 155 yang telah kamu checkout.</p>
        </div>
        <Link to="/" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold text-sm">
          <ArrowLeft size={16} /> Kembali ke Katalog
        </Link>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-4 border-b flex flex-wrap justify-between items-center gap-2 text-sm">
              <div className="flex items-center gap-3">
                <span className="font-bold text-slate-900">{order.id}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500">{order.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                  order.status === "Selesai"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}>
                  {order.status === "Selesai" ? <CheckCircle size={12} /> : <Clock size={12} />}
                  Status: {order.status}
                </span>
              </div>
            </div>

            <div className="p-4 md:p-6 space-y-4">
              <div className="divide-y">
                {order.items.map((item, idx) => (
                  <div key={idx} className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg border" />
                      )}
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                        <p className="text-slate-500 text-xs">
                          {item.quantity} x Rp {item.price.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                    <span className="font-bold text-slate-800 text-sm">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-4 rounded-xl text-xs space-y-1 text-slate-600 border">
                <p><strong className="text-slate-800">Penerima:</strong> {order.customer}</p>
                <p><strong className="text-slate-800">Alamat Pengiriman:</strong> {order.address}</p>
                <p><strong className="text-slate-800">Metode Pembayaran:</strong> {order.paymentMethod}</p>
              </div>

              <div className="pt-3 border-t flex justify-between items-center">
                <span className="text-slate-600 text-sm font-medium">Total Pembayaran:</span>
                <span className="text-xl font-black text-slate-900">
                  Rp {order.total.toLocaleString("id-ID")}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}