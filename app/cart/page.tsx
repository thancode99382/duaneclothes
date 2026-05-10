"use client";

import Link from "next/link";
import Image from "next/image";
import { Minus, Plus, Trash2, ArrowRight, ArrowLeft } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useCart();
  const tax = cartTotal * 0.10;
  const total = cartTotal + tax;

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full relative z-10 flex-1">
        <Link href="/" className="flex items-center gap-2 text-sm font-bold tracking-[0.15em] text-neutral-500 hover:text-[#d91a1a] uppercase mb-12 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" /> Về trang chủ
        </Link>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-black leading-none">
          GIỎ HÀNG <span className="text-[#d91a1a]">CỦA BẠN</span>
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white/60 backdrop-blur-md border border-neutral-200 p-16 text-center shadow-2xl rounded-xl">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-neutral-800">Giỏ Hàng Trống</h2>
            <p className="text-neutral-500 font-medium mb-8">Đã đến lúc định hình bản sắc của bạn.</p>
            <Link href="/collection" className="bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-10 py-4 shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] transition-all inline-block">
              Mua Sắm Ngay
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="w-full lg:w-2/3 flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 bg-white shadow-xl rounded-xl border border-neutral-100 group">
                  <div className="relative w-full sm:w-32 h-48 sm:h-32 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="flex-1">
                    <p className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase mb-1">{item.category}</p>
                    <h3 className="font-black text-2xl uppercase tracking-tighter leading-none mb-2">{item.name}</h3>
                    <p className="font-black text-[#d91a1a] text-xl">{item.price.toLocaleString("vi-VN")}đ</p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0">
                    <div className="flex items-center border-2 border-black rounded bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-neutral-100 transition-colors text-black"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-black">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-neutral-100 transition-colors text-black"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="w-24 text-right font-black text-2xl">
                      {(item.price * item.quantity).toLocaleString("vi-VN")}đ
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-3 text-neutral-300 hover:text-white hover:bg-[#d91a1a] rounded-full transition-all"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-[#111111] text-white p-8 rounded-xl shadow-2xl sticky top-6">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b border-neutral-800 pb-4">Tóm Tắt Đơn Hàng</h2>

                <div className="flex justify-between mb-4 font-medium text-neutral-400">
                  <span className="tracking-wide">TẠM TÍNH</span>
                  <span className="text-white">{cartTotal.toLocaleString("vi-VN")} đ</span>
                </div>

                <div className="flex justify-between mb-8 font-medium text-neutral-400 border-b border-neutral-800 pb-8">
                  <span className="tracking-wide">THUẾ (10%)</span>
                  <span className="text-white">{tax.toLocaleString("vi-VN")} đ</span>
                </div>

                <div className="flex justify-between mb-10 text-3xl font-black tracking-tighter">
                  <span>TỔNG CỘNG</span>
                  <span className="text-[#d91a1a]">{total.toLocaleString("vi-VN")} đ</span>
                </div>

                <Link href="/checkout" className="w-full flex items-center justify-center gap-3 bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest py-5 px-6 transition-all shadow-[0_4px_14px_0_rgba(217,26,26,0.39)]">
                  Thanh Toán <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
