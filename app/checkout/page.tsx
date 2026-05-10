"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: ""
  });

  const tax = cartTotal * 0.10;
  const total = cartTotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.address || !formData.city) return;
    
    clearCart();
    setIsSuccess(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen flex flex-col font-sans bg-[#111111] text-white relative overflow-hidden justify-center items-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <div className="max-w-2xl px-6 py-24 text-center flex flex-col items-center relative z-10">
          <CheckCircle2 className="w-24 h-24 text-[#d91a1a] mb-8" />
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">Đơn Hàng <br/>Đã Xác Nhận!</h1>
          <p className="text-neutral-400 mb-12 text-lg font-medium">Cảm ơn bạn đã định hình bản sắc cùng chúng tôi. Chúng tôi đã nhận được đơn hàng và sẽ bắt đầu xử lý ngay lập tức.</p>
          <Link href="/" className="bg-[#d91a1a] text-white font-bold uppercase tracking-widest text-sm px-12 py-5 shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] hover:bg-red-700 transition-all">
            Về Trang Chủ
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden justify-center items-center">
        <div className="max-w-3xl px-6 py-24 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">Giỏ Hàng <span className="text-[#d91a1a]">Trống</span></h1>
          <Link href="/collection" className="bg-black text-white font-bold uppercase tracking-widest text-sm px-10 py-5 hover:bg-neutral-800 transition-all shadow-xl inline-block">
            Mua Sắm Ngay
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full relative z-10 flex-1">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-black leading-none">
          THANH TOÁN <span className="text-[#d91a1a]">AN TOÀN</span>
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-2/3">
            <form id="checkout-form" onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-2xl rounded-2xl border border-neutral-100">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b-4 border-black inline-block pb-1">Chi Tiết Giao Hàng</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Họ Tên *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Số Điện Thoại</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Địa Chỉ *</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Thành Phố *</label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white"
                  />
                </div>
              </div>
            </form>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-[#111111] text-white p-8 rounded-2xl shadow-2xl sticky top-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8 border-b border-neutral-800 pb-4">Tóm Tắt Đơn Hàng</h2>
              
              <div className="max-h-60 overflow-y-auto mb-8 pr-4 custom-scrollbar">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between mb-6 text-sm items-center">
                    <div className="flex-1 pr-4">
                      <span className="font-black text-[#d91a1a] text-lg mr-2">{item.quantity}x</span> 
                      <span className="text-neutral-300 font-bold uppercase tracking-tight">{item.name}</span>
                    </div>
                    <div className="font-black text-lg">{(item.price * item.quantity).toLocaleString("vi-VN")}đ</div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-neutral-800 pt-6 mb-6 font-medium space-y-4">
                <div className="flex justify-between text-neutral-400">
                  <span className="tracking-wide">TẠM TÍNH</span>
                  <span className="text-white">{cartTotal.toLocaleString("vi-VN")} đ</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span className="tracking-wide">THUẾ (10%)</span>
                  <span className="text-white">{tax.toLocaleString("vi-VN")} đ</span>
                </div>
              </div>
              
              <div className="flex justify-between mb-10 text-3xl font-black border-t border-neutral-800 pt-6 tracking-tighter">
                <span>TỔNG CỘNG</span>
                <span className="text-[#d91a1a]">{total.toLocaleString("vi-VN")} đ</span>
              </div>
              
              <button 
                type="submit"
                form="checkout-form"
                className="w-full flex items-center justify-center gap-3 bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest py-5 px-6 transition-all shadow-[0_4px_14px_0_rgba(217,26,26,0.39)]"
              >
                Đặt Hàng <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
