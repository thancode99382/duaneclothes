"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Star, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#e8e8e8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-6">Không Tìm Thấy Sản Phẩm</h1>
          <Link href="/collection" className="bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] transition-all">
            Về danh mục
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10 flex-1 flex flex-col">
        <Link href="/collection" className="flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-neutral-500 hover:text-[#d91a1a] uppercase mb-12 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" /> Về bộ sưu tập
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative aspect-[4/5] bg-white/40 shadow-2xl rounded-2xl overflow-hidden group">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              priority 
            />
          </div>
          
          {/* Details Side */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#d91a1a] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-md">
                {product.category}
              </span>
              <div className="flex items-center text-black">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-black tracking-wider ml-1.5 pt-0.5">{product.rating} / 5</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-2 leading-[0.9]">
              {product.name}
            </h1>
            <p className="text-4xl font-black text-[#d91a1a] mb-8 tracking-tighter">${product.price.toFixed(2)}</p>
            
            <p className="text-neutral-700 mb-12 leading-relaxed text-lg font-medium max-w-lg">
              {product.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <div className="flex items-center border-2 border-black bg-white">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-neutral-100 transition-colors text-black"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="w-16 text-center font-black text-xl">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-neutral-100 transition-colors text-black"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              
              <button 
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-3 py-4 px-8 font-bold uppercase tracking-widest text-sm transition-all shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] ${
                  isAdded 
                    ? "bg-black text-white shadow-none" 
                    : "bg-[#d91a1a] hover:bg-red-700 text-white"
                }`}
              >
                <ShoppingBag className="w-5 h-5" />
                {isAdded ? "Đã Thêm Vào Giỏ!" : "Thêm Vào Giỏ"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
