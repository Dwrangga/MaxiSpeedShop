import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-2">Keranjang Belanja Kosong</h2>
        <p className="text-gray-500 mb-4">Yuk, cari produk impianmu sekarang!</p>
        <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Keranjang Belanja</h1>
      <div className="divide-y">
        {cart.map((item) => (
          <div key={item.id} className="py-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-500">Rp {item.price.toLocaleString("id-ID")}</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-200 rounded font-bold">-</button>
              <span className="font-semibold">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-200 rounded font-bold">+</button>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 ml-4">Hapus</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t flex justify-between items-center">
        <div>
          <span className="text-gray-600">Total Harga:</span>
          <p className="text-2xl font-bold text-blue-600">Rp {getTotalPrice().toLocaleString("id-ID")}</p>
        </div>
        <Link to="/checkout" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold">
          Lanjut ke Checkout
        </Link>
      </div>
    </div>
  );
}