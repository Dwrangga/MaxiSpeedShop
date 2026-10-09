import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Windshield Bening NMAX Old 155",
    price: 80000,
    category: "Part & Aksesori Motor",
    desc: "Windshield model standar versi transparan/visor bening.",
    image: "https://down-id.img.susercontent.com/file/bcb4c495b8f49cf8d992b9774c70fb67"
  },
  {
    id: 2,
    name: "Shockbreaker YSS G-Sport NMAX",
    price: 3450000,
    category: "Suspensi & Pengereman",
    desc: "Shockbreaker tabung atas empuk dengan pengatur rebound presisi.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-7qukw-lf43j2zo6hj1ac"
  },
  {
    id: 3,
    name: "Knalpot Standar Racing SeaPro NMAX 155",
    price: 1350000,
    category: "Performa & Knalpot",
    desc: "Suara bass bulat adem tidak bising, meningkatkan performa akselerasi.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-8224w-mhgc4d2eo0sib0"
  },
  {
    id: 4,
    name: "Lampu LED Projie AES NMAX",
    price: 950000,
    category: "Penerangan & LED",
    desc: "Lampu sorot projector tajam tembus kabut lengkap dengan devil eye.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lpjbxmupag3cc5"
  },
  {
    id: 5,
    name: "Kaliper Brembo 4 Piston",
    price: 1850000,
    category: "Suspensi & Pengereman",
    desc: "Pengereman ekstra pakem dan tampil bergaya racing premium.",
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztg-meqo4a8ckni84e"
  },
  {
    id: 6,
    name: "Velk VND AK55 R14 Nmax Old",
    price: 2300000,
    category: "Part & Aksesori Motor",
    desc: "Velk racing ringan dan kuat, cocok untuk modifikasi NMAX Old. Membuat tampilan motor lebih padat dan agresif.",
    image: "https://tse3.mm.bing.net/th/id/OIP.SCUt3dfwLToIgsiM9H53ygHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

export default function Dashboard() {
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const filteredProducts = DUMMY_PRODUCTS.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Semua" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      {/* Banner / Header Ringkasan Toko */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-yellow-400">Pusat Variasi & Aksesori NMAX 155</h1>
          <p className="text-gray-300 text-sm mt-1">Sediakan suku cadang modifikasi Plug & Play berkualitas untuk NMAX Old & New.</p>
        </div>
        <span className="mt-4 md:mt-0 bg-yellow-400 text-slate-900 font-extrabold px-4 py-2 rounded-lg text-sm">
          100% Original & PNP
        </span>
      </div>

      {/* Filter & Pencarian */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col md:flex-row gap-4 justify-between">
        <input
          type="text"
          placeholder="Cari variasi NMAX (misal: Windshield, Knalpot)..."
          className="px-4 py-2 border rounded-lg w-full md:w-1/2 focus:outline-yellow-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded-lg focus:outline-yellow-500 bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Semua">Semua Kategori Variasi</option>
          <option value="Part & Aksesori Motor">Part & Aksesori Motor</option>
          <option value="Suspensi & Pengereman">Suspensi & Pengereman</option>
          <option value="Performa & Knalpot">Performa & Knalpot</option>
          <option value="Penerangan & LED">Penerangan & LED</option>
          <option value="Aksesori Aksesibilitas">Aksesori Aksesibilitas</option>
        </select>
      </div>

      {/* Katalog Produk */}
      <h2 className="text-2xl font-bold mb-4 text-slate-800">Katalog Produk NMAX 155</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2.5 py-1 rounded-full">
                  {product.category}
                </span>
                <h3 className="font-bold text-lg mt-2 text-slate-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.desc}</p>
                <p className="text-slate-900 font-extrabold text-xl mt-3">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
            <div className="p-4 pt-0 flex gap-2">
              <Link to={`/product/${product.id}`} className="flex-1 text-center bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-sm font-semibold">
                Detail
              </Link>
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-yellow-400 py-2 rounded-lg text-sm font-bold shadow"
              >
                + Keranjang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}