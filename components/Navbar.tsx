"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { cart } = useCart();
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "LOOKBOOK", path: "/lookbook" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <Link href="/" className="relative w-40 h-12 flex items-center">
        <Image 
          src="/logo.jpg" 
          alt="Duane LA Logo" 
          fill 
          className="object-contain object-left" 
          priority
        />
      </Link>

      <div className="hidden md:flex space-x-10 text-sm font-semibold tracking-widest text-neutral-800 uppercase">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link 
              key={link.name}
              href={link.path} 
              className={`relative hover:text-black transition-colors ${isActive ? "text-black" : "text-neutral-500"}`}
            >
              {link.name}
              {isActive && (
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#d91a1a]"></span>
              )}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center space-x-6 text-neutral-800">
        <Link href="/search" className="hover:text-[#d91a1a] transition-colors"><Search className="w-5 h-5" /></Link>
        <Link href="/cart" className="hover:text-[#d91a1a] transition-colors relative">
          <ShoppingBag className="w-5 h-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#d91a1a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
