"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, ShoppingCart, Star, Shirt, ArrowLeft } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import CartToast, { CartToastData } from "../../components/CartToast";

function ProductCard({
  product,
  onAddToCart,
}: {
  product: (typeof products)[0];
  onAddToCart: (data: CartToastData) => void;
}) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const badgeColor =
    product.badge === "BEST SELLER"
      ? "bg-[#d91a1a]"
      : product.badge === "LIMITED"
        ? "bg-neutral-700"
        : "bg-[#d91a1a]";

  const handleAddToCart = () => {
    const size = selectedSize ?? product.sizes[1]; // default M
    addToCart(product, 1);
    onAddToCart({
      id: product.id,
      productName: product.name,
      size,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-white/5 hover:border-[#d91a1a]/30 transition-all duration-300 hover:shadow-[0_20px_60px_-10px_rgba(217,26,26,0.2)]">
      {/* Image Area */}
      <div className="relative aspect-[3/4] bg-[#111111]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top"
        />

        {/* Badge top-left */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${badgeColor} text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded`}
          >
            {product.badge}
          </span>
        )}

        {/* Icons top-right */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-[#d91a1a] hover:bg-black/70 transition-all">
            <Heart className="w-4 h-4" />
          </button>
          <button
            onClick={handleAddToCart}
            className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-[#d91a1a] hover:bg-black/70 transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Color swatches or Form tag */}
        <div className="flex items-center gap-2">
          {product.colors.length > 0 ? (
            <>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
                {product.colors.length} MÀU
              </span>
              <div className="flex gap-1.5">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="w-5 h-5 rounded-full border border-white/20 cursor-pointer hover:ring-2 ring-[#d91a1a] transition-all"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </>
          ) : (
            <span className="flex items-center gap-1.5 text-[10px] font-bold text-neutral-500 uppercase tracking-widest">
              <Shirt className="w-3 h-3" /> FORM REGULAR
            </span>
          )}
        </div>

        {/* Name + Price */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-black text-white uppercase tracking-tight leading-tight text-base flex-1">
            {product.name}
          </h3>
          <div className="text-right flex-shrink-0">
            <p className="font-black text-[#d91a1a] text-base leading-none">
              {product.price.toLocaleString("vi-VN")}đ
            </p>
            <p className="text-neutral-500 text-xs line-through mt-0.5">
              {product.originalPrice.toLocaleString("vi-VN")}đ
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-neutral-500 text-xs leading-relaxed">
          {product.description.split(".")[0]}.
        </p>

        {/* Star rating */}
        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i <= Math.round(product.rating)
                  ? "text-[#d91a1a] fill-[#d91a1a]"
                  : "text-neutral-700 fill-neutral-700"
              }`}
            />
          ))}
          <span className="text-neutral-500 text-xs ml-1">
            ({product.reviewCount} đánh giá)
          </span>
        </div>

        {/* Size selector */}
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1.5 text-xs font-bold uppercase rounded transition-all ${
                selectedSize === size
                  ? "bg-[#d91a1a] text-white border border-[#d91a1a]"
                  : "text-neutral-300 border border-neutral-700 hover:border-white hover:text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-[#d91a1a] hover:bg-red-700 text-white font-black uppercase tracking-widest text-sm py-3 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(217,26,26,0.3)]"
        >
          <ShoppingCart className="w-4 h-4" />
          Thêm Vào Giỏ
        </button>
      </div>
    </div>
  );
}

export default function CollectionPage() {
  const [toast, setToast] = useState<CartToastData | null>(null);

  const handleAddToCart = (data: CartToastData) => {
    // Reset first so the same product triggers animation again
    setToast(null);
    setTimeout(() => setToast(data), 10);
  };

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#031f41] relative overflow-hidden">
      {/* Background noise */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 w-full relative z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] text-neutral-500 hover:text-white uppercase mb-10 transition-colors w-fit group"
        >
          <span className="w-7 h-7 rounded-full border border-neutral-700 group-hover:border-white flex items-center justify-center transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" />
          </span>
          Về trang chủ
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-bold tracking-[0.2em] text-[#d91a1a] mb-2 uppercase">
            Sản Phẩm Đường Phố Thiết Yếu
          </p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
            BỘ SƯU TẬP <span className="text-[#d91a1a]">CỦA CHÚNG TÔI</span>
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Feature bar */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/10 pt-12">
          {[
            {
              icon: "🧵",
              title: "Chất Liệu Cao Cấp",
              sub: "Cotton mềm mại, thoáng mát",
            },
            {
              icon: "👕",
              title: "Giữ Form Tốt",
              sub: "Bền đẹp theo thời gian",
            },
            {
              icon: "🔄",
              title: "Đổi Trả Dễ Dàng",
              sub: "Trong vòng 14 ngày kể từ khi nhận hàng",
            },
            {
              icon: "🚚",
              title: "Miễn Phí Vận Chuyển",
              sub: "Cho đơn hàng từ 399k",
            },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-lg flex-shrink-0">
                {f.icon}
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-widest leading-tight">
                  {f.title}
                </p>
                <p className="text-neutral-500 text-xs mt-1 leading-relaxed">
                  {f.sub}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* Cart Toast Notification */}
      <CartToast toast={toast} onClose={() => setToast(null)} />
    </main>
  );
}
