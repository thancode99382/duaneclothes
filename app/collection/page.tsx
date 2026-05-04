import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { products } from "../../data/products";

export default function CollectionPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full relative z-10">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-neutral-500 hover:text-[#d91a1a] uppercase mb-12 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" /> Về trang chủ
        </Link>
        <div className="mb-16">
          <p className="text-sm font-bold tracking-[0.2em] text-[#d91a1a] mb-2 uppercase">
            Sản Phẩm Đường Phố Thiết Yếu
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
            BỘ SƯU TẬP <span className="text-[#d91a1a]">CỦA CHÚNG TÔI</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] mb-6 bg-neutral-200/50 rounded-xl overflow-hidden shadow-lg group-hover:shadow-[0_10px_30px_-10px_rgba(217,26,26,0.3)] transition-all duration-500">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                
                {product.popular && (
                  <div className="absolute top-4 right-4 bg-[#d91a1a] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-md">
                    Phổ Biến
                  </div>
                )}
              </div>
              
              <div className="flex flex-col flex-1">
                <p className="text-xs font-bold tracking-[0.15em] text-neutral-500 uppercase mb-2">{product.category}</p>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-black text-2xl uppercase tracking-tight leading-none group-hover:text-[#d91a1a] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="font-bold text-xl text-black">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
