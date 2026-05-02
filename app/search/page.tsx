"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search as SearchIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import { products } from "../../data/products";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) || 
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10 flex-1 flex flex-col">
        <div className="max-w-3xl mx-auto w-full mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black leading-none mb-8 text-center">
            FIND YOUR <span className="text-[#d91a1a]">STYLE</span>
          </h1>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-neutral-400">
              <SearchIcon className="h-6 w-6" />
            </div>
            <input
              type="text"
              className="w-full bg-white border-4 border-black text-black font-bold text-xl py-6 pl-16 pr-6 focus:outline-none focus:border-[#d91a1a] transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              placeholder="SEARCH PRODUCTS OR CATEGORIES..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>

        {query && (
          <div className="mb-8">
            <p className="text-sm font-bold tracking-[0.15em] text-neutral-500 uppercase">
              {filteredProducts.length} Results for <span className="text-black">"{query}"</span>
            </p>
          </div>
        )}

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group flex flex-col bg-white p-4 shadow-xl border border-neutral-100 hover:border-[#d91a1a] transition-all">
                <div className="relative aspect-[4/5] mb-4 bg-neutral-100 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  {product.popular && (
                    <div className="absolute top-2 right-2 bg-[#d91a1a] text-white text-[9px] font-bold uppercase tracking-widest px-2 py-1 shadow-md">
                      Popular
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col flex-1">
                  <p className="text-[10px] font-bold tracking-[0.15em] text-neutral-400 uppercase mb-1">{product.category}</p>
                  <h3 className="font-black text-lg uppercase tracking-tight leading-none group-hover:text-[#d91a1a] transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="font-black text-[#d91a1a] mt-auto">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          query && (
            <div className="text-center py-20 bg-white/50 backdrop-blur border border-neutral-200">
              <SearchIcon className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
              <h2 className="text-2xl font-black uppercase tracking-tighter text-neutral-400">No products found</h2>
              <p className="text-neutral-500 font-medium mt-2">Try searching for something else, like "Polo" or "Food".</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}
