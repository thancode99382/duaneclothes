import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Search, ShoppingBag, ShieldCheck, Shirt, Star, Truck, RefreshCw } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-white">
      {/* Top Background Section (Light Grey Texture) */}
      <div className="flex-1 flex flex-col relative overflow-hidden pb-7">
        {/* Subtle background noise/texture overlay could go here */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-1 flex items-center pt-8">
          <div className="w-full lg:w-[55%] flex flex-col z-20">
            <p className="text-sm font-bold tracking-[0.2em] text-neutral-600 mb-4 uppercase">
              Detail Makes Difference
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-wide text-black uppercase mb-1">
              DEFINE YOUR
            </h1>
            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-wide text-[#d91a1a] uppercase mb-6 drop-shadow-sm">
              IDENTITY
            </h1>
            
            <p className="text-neutral-700 max-w-[400px] mb-8 font-medium leading-relaxed">
              Duane &ndash; Premium streetwear polo collection for young generation. Youth culture / since 2026.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/collection" className="bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] transition-all">
                Shop Now
              </Link>
              <button className="bg-transparent border border-[#d91a1a] text-[#d91a1a] hover:bg-[#d91a1a] hover:text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all">
                View Lookbook
              </button>
            </div>

            {/* Feature Icons */}
            <div className="flex gap-12 mt-auto">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center text-[#d91a1a]">
                  <ShieldCheck strokeWidth={1.5} className="w-10 h-10" />
                </div>
                <p className="text-xs font-bold tracking-widest text-neutral-800 text-center uppercase leading-tight">
                  Premium<br/>Quality
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center text-[#d91a1a]">
                  <Shirt strokeWidth={1.5} className="w-10 h-10" />
                </div>
                <p className="text-xs font-bold tracking-widest text-neutral-800 text-center uppercase leading-tight">
                  Street<br/>Style
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center text-[#d91a1a]">
                  <Star strokeWidth={1.5} className="w-10 h-10" />
                </div>
                <p className="text-xs font-bold tracking-widest text-neutral-800 text-center uppercase leading-tight">
                  Youth<br/>Culture
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 md:w-2/3 lg:w-[65%] h-[120%] z-0 flex justify-end pointer-events-none">
            <div className="relative w-full h-full">
             
             
              <Image 
                src="/polo_shirts.png"
                alt="Polo Collection"
                fill
                
                className="object-contain object-right  translate-x-80 translate-y-6 "
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-[#111111] text-white w-full relative z-20 border-t-4 border-[#d91a1a]/20">
        {/* Subtle noise for the black background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Top Half */}
          <div className="py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                Polo Collection <span className="text-[#d91a1a]">2026</span>
              </h2>
              <p className="text-neutral-400 font-medium max-w-md">
                Limited edition &ndash; trendy apparel for young and dynamic lifestyle.
              </p>
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 lg:border-l border-neutral-800 lg:pl-10">
              <div>
                <p className="font-bold text-sm tracking-wider uppercase mb-1">Limited Edition</p>
                <p className="text-neutral-400 text-sm">Exclusive design</p>
              </div>
              <div className="md:border-l border-neutral-800 md:pl-6">
                <p className="font-bold text-sm tracking-wider uppercase mb-1">Trendy Apparel</p>
                <p className="text-neutral-400 text-sm">Modern & stylish</p>
              </div>
              <div className="md:border-l border-neutral-800 md:pl-6">
                <p className="font-bold text-sm tracking-wider uppercase mb-1">Youth Culture</p>
                <p className="text-neutral-400 text-sm">For young generation</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Half (Footer-like features) */}
          <div className="py-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap gap-8 lg:gap-16">
              <div className="flex items-center gap-4">
                <Truck className="w-8 h-8 text-neutral-400" strokeWidth={1} />
                <div>
                  <p className="font-bold text-sm tracking-widest uppercase">Free Shipping</p>
                  <p className="text-neutral-500 text-xs mt-0.5">On all orders</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="w-8 h-8 text-neutral-400" strokeWidth={1} />
                <div>
                  <p className="font-bold text-sm tracking-widest uppercase">Secure Payment</p>
                  <p className="text-neutral-500 text-xs mt-0.5">100% protected</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <RefreshCw className="w-8 h-8 text-neutral-400" strokeWidth={1} />
                <div>
                  <p className="font-bold text-sm tracking-widest uppercase">Easy Returns</p>
                  <p className="text-neutral-500 text-xs mt-0.5">14 days return</p>
                </div>
              </div>
            </div>
            
            {/* Logo repeated */}
            <div className="flex items-end text-[#d91a1a] font-black italic tracking-tighter leading-none select-none opacity-80">
               <Link href="/" className="relative w-40 h-20 flex items-center">
        <Image 
          src="/logo.jpg" 
          alt="Duane LA Logo" 
          fill 
          className="object-contain object-left" 
          priority
        />
      </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
