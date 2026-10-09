import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, getTotalPrice, removeFromCart } = useCart();
  const { addOrder } = useOrders();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "Transfer Bank"
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Keranjang belanjaan kamu masih kosong!");

    const newOrder = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split("T")[0],
      customer: formData.name,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      items: [...cart],
      total: getTotalPrice(),
      status: "Diproses"
    };

    addOrder(newOrder);

    // Hapus semua isi keranjang
    cart.forEach((item) => removeFromCart(item.id));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto my-12 border">
        <span className="text-6xl">🏍️</span>
        <h2 className="text-2xl font-bold mt-4 mb-2 text-slate-900">Pesanan Berhasil Dibuat!</h2>
        <p className="text-slate-600 mb-6 text-sm">
          Terima kasih telah berbelanja variasi NMAX 155 di NMAX Zone. Pesananmu telah terdata dan sedang diproses oleh admin.
        </p>
        <div className="flex flex-col gap-3">
          <Link to="/orders" className="bg-slate-900 text-yellow-400 font-bold px-6 py-3 rounded-xl shadow hover:bg-slate-800">
            Lihat Pesanan Saya
          </Link>
          <Link to="/" className="text-slate-600 hover:text-slate-900 text-sm font-semibold">
            Kembali ke Katalog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-2xl shadow border">
        <h2 className="text-xl font-bold mb-4 text-slate-900">Informasi Pengiriman & Pemesanan</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-700">Nama Lengkap</label>
            <input
              type="text"
              required
              placeholder="Contoh: Budi Santoso"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full border p-2.5 rounded-lg focus:outline-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-700">Alamat Lengkap Pengiriman</label>
            <textarea
              required
              rows="3"
              placeholder="Masukkan jalan, nomor rumah, kecamatan, kota..."
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full border p-2.5 rounded-lg focus:outline-yellow-500"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-slate-700">Metode Pembayaran</label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className="w-full border p-2.5 rounded-lg focus:outline-yellow-500 bg-white"
            >
              <option>Transfer Bank (BCA/Mandiri/BRI)</option>
              <option>E-Wallet (Gopay/OVO/Dana/ShopeePay)</option>
              <option>COD (Bayar di Tempat)</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-slate-900 text-yellow-400 py-3 rounded-xl font-bold hover:bg-slate-800 shadow mt-2">
            Konfirmasi & Buat Pesanan
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow border flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-4 text-slate-900">Ringkasan Pesanan Variasi</h2>
          {cart.length === 0 ? (
            <p className="text-slate-500 text-sm italic">Belum ada barang di keranjang.</p>
          ) : (
            <div className="divide-y max-h-72 overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="py-3 flex justify-between items-center text-sm">
                  <div>
                    <p className="font-bold text-slate-800">{item.name}</p>
                    <p className="text-slate-500 text-xs">
                      {item.quantity} x Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <span className="font-bold text-slate-900">
                    Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pt-4 border-t mt-4 flex justify-between items-center">
          <span className="font-bold text-slate-700">Total Tagihan:</span>
          <span className="text-2xl font-black text-slate-900">
            Rp {getTotalPrice().toLocaleString("id-ID")}
          </span>
        </div>
      </div>
    </div>
  );
}