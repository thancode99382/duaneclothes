"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search as SearchIcon, X, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import { products } from "../../data/products";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) || 
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#f4f4f4] relative overflow-hidden">
      {/* Dynamic Background Noise */}
      <div className="fixed inset-0 opacity-[0.12] pointer-events-none z-0 mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      {/* Decorative large text in background */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none opacity-[0.03] overflow-hidden select-none">
        <h1 className="text-[25vw] font-black uppercase tracking-tighter text-black leading-none whitespace-nowrap">
          TÌM KIẾM
        </h1>
      </div>

      <div className="relative z-20">
        <Navbar />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 py-12 lg:py-20 relative z-10 flex-1 flex flex-col">
        {/* Search Header Area */}
        <div className="w-full mb-16 lg:mb-24 flex flex-col items-center">
          <div className={`w-full max-w-4xl transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${isFocused ? 'scale-[1.02]' : 'scale-100'}`}>
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r from-[#d91a1a] via-black to-[#d91a1a] opacity-20 blur-lg transition-all duration-500 ${isFocused ? 'opacity-40 blur-xl scale-105' : 'group-hover:opacity-30'}`}></div>
              <div className={`relative bg-white flex items-center border-4 border-black p-2 md:p-4 shadow-[12px_12px_0px_0px_rgba(217,26,26,1)] transition-all duration-300 ${isFocused ? 'shadow-[16px_16px_0px_0px_rgba(217,26,26,1)] translate-x-[-4px] translate-y-[-4px]' : ''}`}>
                <SearchIcon className={`h-8 w-8 md:h-10 md:w-10 ml-4 transition-colors duration-300 ${isFocused ? 'text-[#d91a1a]' : 'text-neutral-400'}`} />
                <input
                  type="text"
                  className="w-full bg-transparent text-black font-black text-2xl md:text-5xl lg:text-6xl py-4 md:py-6 pl-6 pr-6 md:pr-16 focus:outline-none placeholder-neutral-300 uppercase tracking-tighter"
                  placeholder="TÌM KIẾM PHONG CÁCH CỦA BẠN..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  autoFocus
                />
                {query && (
                  <button 
                    onClick={() => setQuery("")}
                    className="absolute right-6 md:right-8 p-2 hover:bg-neutral-100 rounded-full transition-colors group/clear"
                  >
                    <X className="h-6 w-6 md:h-8 md:w-8 text-black group-hover/clear:text-[#d91a1a] transition-colors" strokeWidth={3} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className={`w-full relative transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-end justify-between mb-10 border-b-[3px] border-black pb-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-4">
              {query ? 'KẾT QUẢ' : 'THỊNH HÀNH'}
              {query && <span className="text-[#d91a1a] truncate max-w-[200px] md:max-w-[400px]">"{query}"</span>}
            </h2>
            <p className="text-sm md:text-base font-bold tracking-[0.2em] text-neutral-500 uppercase h-full flex items-end">
              [{filteredProducts.length}] SẢN PHẨM
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredProducts.map((product, index) => (
                <Link 
                  href={`/products/${product.id}`} 
                  key={product.id} 
                  className="group flex flex-col relative animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[2/3] mb-6 bg-neutral-200 overflow-hidden border-4 border-transparent group-hover:border-black transition-colors duration-300 shadow-sm group-hover:shadow-xl">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Button */}
                    <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] flex">
                      <div className="bg-[#d91a1a] text-white py-4 px-6 font-black uppercase tracking-widest text-sm flex-1 flex items-center justify-between border-t-4 border-black">
                        <span>Xem Sản Phẩm</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                      </div>
                    </div>

                    {product.popular && (
                      <div className="absolute top-4 left-4 bg-black text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 shadow-[4px_4px_0px_0px_rgba(217,26,26,1)] z-10">
                        HOT
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col flex-1 pl-3 border-l-[3px] border-transparent group-hover:border-[#d91a1a] transition-all duration-300">
                    <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-2">{product.category}</p>
                    <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight leading-none text-black mb-3 pr-4 group-hover:text-[#d91a1a] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-black text-lg md:text-xl text-black mt-auto">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center py-20 md:py-32 text-center animate-in fade-in duration-500">
              <div className="relative mb-10 group">
                <SearchIcon className="h-32 w-32 md:h-48 md:w-48 text-neutral-200 transition-transform duration-500 group-hover:scale-95" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <X className="h-16 w-16 md:h-24 md:w-24 text-[#d91a1a] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-90" strokeWidth={4} />
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-black mb-6 leading-none">KHÔNG TÌM THẤY GÌ</h2>
              <p className="text-lg md:text-xl text-neutral-500 font-medium max-w-lg mx-auto">
                Chúng tôi không thể tìm thấy bất cứ thứ gì khớp với "{query}". Hãy thử kiểm tra lỗi chính tả hoặc sử dụng các từ khóa khác.
              </p>
              <button 
                onClick={() => setQuery("")}
                className="mt-12 bg-black text-white px-8 py-5 font-black uppercase tracking-widest hover:bg-[#d91a1a] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-all duration-300 flex items-center gap-3 text-sm md:text-base group"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" strokeWidth={3} />
                Xóa Tìm Kiếm
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

