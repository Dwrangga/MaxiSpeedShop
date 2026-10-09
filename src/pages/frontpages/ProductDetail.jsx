import { useParams, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { ArrowLeft, ShoppingCart, CheckCircle } from "lucide-react";

// Data produk disinkronkan persis dengan yang ada di Dashboard.jsx
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Windshield Bening NMAX Old 155",
    price: 80000,
    category: "Part & Aksesori Motor",
    desc: "Windshield model standar versi transparan/visor bening. Melindungi pengendara dari terpaan angin tanpa menghalangi pandangan.",
    specs: ["Bahan: Akrilik Bening Premium", "Ketebalan: 3mm", "Kesesuaian: Yamaha NMAX Old 155", "Pemasangan: Plug & Play (PNP)"],
    image: "https://down-id.img.susercontent.com/file/bcb4c495b8f49cf8d992b9774c70fb67"
  },
  {
    id: 2,
    name: "Shockbreaker YSS G-Sport NMAX",
    price: 3450000,
    category: "Suspensi & Pengereman",
    desc: "Shockbreaker tabung atas empuk dengan pengatur rebound presisi. Sangat nyaman untuk touring maupun penggunaan harian di jalan bergelombang.",
    specs: ["Merek: YSS Original", "Fitur: Rebound & Thread Spring Preload", "Tipe: Tabung Atas G-Sport", "Kenyamanan: Ekstra Empuk & Stabil"],
    image: "https://down-id.img.susercontent.com/file/id-11134207-7qukw-lf43j2zo6hj1ac"
  },
  {
    id: 3,
    name: "Knalpot Standar Racing SeaPro NMAX 155",
    price: 1350000,
    category: "Performa & Knalpot",
    desc: "Suara bass bulat adem tidak bising, meningkatkan performa akselerasi secara signifikan tanpa merusak komponen mesin.",
    specs: ["Tipe: Standar Racing Full System", "Karakter Suara: Bass Bulat Adem", "Bahan: Stainless Steel Tahan Karat", "Fitur: Meningkatkan Akselerasi Motor"],
    image: "https://down-id.img.susercontent.com/file/id-11134207-8224w-mhgc4d2eo0sib0"
  },
  {
    id: 4,
    name: "Lampu LED Projie AES NMAX",
    price: 950000,
    category: "Penerangan & LED",
    desc: "Lampu sorot projector tajam tembus kabut lengkap dengan devil eye. Memberikan pencahayaan maksimal saat berkendara malam hari.",
    specs: ["Daya Sorot: Terang Tembus Kabut", "Lensa: Projector AES", "FiturTambahan: Devil Eye", "Pemasangan: Khusus Yamaha NMAX"],
    image: "https://down-id.img.susercontent.com/file/id-11134207-7r98r-lpjbxmupag3cc5"
  },
  {
    id: 5,
    name: "Kaliper Brembo 4 Piston",
    price: 1850000,
    category: "Suspensi & Pengereman",
    desc: "Pengereman ekstra pakem dan tampil bergaya racing premium. Daya cengkeram kuat menjamin keamanan berkendara dalam kecepatan tinggi.",
    specs: ["Merek: Brembo", "Jumlah Piston: 4 Piston Axial", "Performa: Pengereman Pakem & Presisi", "Tampilan: Racing Look Premium"],
    image: "https://down-id.img.susercontent.com/file/id-11134207-81ztg-meqo4a8ckni84e"
  },
  {
    id: 6,
    name: "Velk VND AK55 R14 Nmax Old",
    price: 2300000,
    category: "Part & Aksesori Motor",
    desc: "Velk racing ringan dan kuat, cocok untuk modifikasi NMAX Old. Membuat tampilan motor lebih padat, berbobot, dan agresif.",
    specs: ["Merek: VND AK55 Original", "Ukuran Ring: Ring 14", "Material: Aluminium Alloy Ringan & Kuat", "Kesesuaian: NMAX Old 155"],
    image: "https://tse3.mm.bing.net/th/id/OIP.SCUt3dfwLToIgsiM9H53ygHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Mencari produk sesuai ID dari URL, jika tidak ketemu akan default ke produk pertama
  const product = DUMMY_PRODUCTS.find((p) => p.id === Number(id)) || DUMMY_PRODUCTS[0];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tombol Navigasi Kembali */}
      <Link to="/" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold mb-6">
        <ArrowLeft size={18} /> Kembali ke Katalog Variasi
      </Link>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border grid grid-cols-1 md:grid-cols-2">
        {/* Gambar Produk */}
        <div className="h-72 md:h-full bg-slate-100 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-xl shadow-sm"
          />
        </div>

        {/* Informasi Produk */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-3">{product.name}</h1>
            <p className="text-3xl font-black text-slate-900 mt-2">
              Rp {product.price.toLocaleString("id-ID")}
            </p>

            <div className="my-4 border-t border-b py-3">
              <h3 className="text-sm font-bold text-slate-700 mb-1">Deskripsi Produk:</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{product.desc}</p>
            </div>

            {/* Spesifikasi Produk */}
            {product.specs && (
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-700 mb-2">Spesifikasi & Detail:</h3>
                <ul className="space-y-1">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="text-xs text-slate-600 flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tombol Tambah Keranjang */}
          <div className="pt-4 border-t">
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-yellow-400 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <ShoppingCart size={20} />
              + Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}