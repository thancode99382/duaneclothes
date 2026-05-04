"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ShoppingCart, X, CheckCircle2 } from "lucide-react";

export type CartToastData = {
  id: string;
  productName: string;
  size: string;
  price: number;
  image: string;
};

type Props = {
  toast: CartToastData | null;
  onClose: () => void;
};

export default function CartToast({ toast, onClose }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!toast) return;

    // Trigger entrance animation
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 400); // Wait for exit animation before clearing
    }, 3500);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-all duration-400 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDuration: "380ms" }}
    >
      <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)] w-80 overflow-hidden">
        {/* Top bar */}
        <div className="bg-[#d91a1a] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span className="text-white text-xs font-black uppercase tracking-widest">Đã thêm vào giỏ!</span>
          </div>
          <button
            onClick={() => { setVisible(false); setTimeout(onClose, 400); }}
            className="text-white/70 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex items-center gap-4">
          {/* Product thumbnail */}
          <div className="relative w-16 h-20 bg-[#111] rounded-xl overflow-hidden flex-shrink-0 border border-white/5">
            <Image src={toast.image} alt={toast.productName} fill className="object-cover object-top" />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <p className="text-white font-black text-sm uppercase tracking-tight leading-tight truncate">
              {toast.productName}
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-2 py-0.5 border border-white/20 text-neutral-400 text-[10px] font-bold uppercase rounded">
                Size {toast.size}
              </span>
            </div>
            <p className="text-[#d91a1a] font-black text-base mt-2 tracking-tight">
              {toast.price.toLocaleString("vi-VN")}đ
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-0.5 bg-neutral-800">
          <div
            className="h-full bg-[#d91a1a] origin-left"
            style={{
              animation: visible ? "shrink 3.5s linear forwards" : "none",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes shrink {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  );
}
