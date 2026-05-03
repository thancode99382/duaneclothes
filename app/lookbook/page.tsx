import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function LookbookPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b-4 border-black pb-8 gap-8">
          <div>
            <p className="text-[#d91a1a] font-bold tracking-[0.2em] uppercase mb-4">Volume 01</p>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
              URBAN<br/>SYMPHONY
            </h1>
          </div>
          <div className="md:max-w-sm">
            <p className="text-neutral-600 font-medium leading-relaxed">
              Our latest collection explores the intersection of brutalist architecture and fluid street motion. 
              Designed for the modern environment.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
          <div className="w-full lg:w-1/2 relative aspect-[3/4] bg-white p-3 md:p-5 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full h-full overflow-hidden border border-neutral-100 bg-[#f5f5f5]">
              <Image src="/product2.jpg" alt="Lookbook 1" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#d91a1a] text-white px-6 py-4 shadow-xl">
              <p className="font-black text-2xl uppercase tracking-tighter">Look 01</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-center mt-10 lg:mt-0">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
              STREET<br/>READY
            </h2>
            <p className="text-xl text-neutral-500 font-bold tracking-widest uppercase mb-8">Elevate the everyday</p>
            <p className="text-neutral-700 mb-10 leading-relaxed text-lg max-w-md">
              A blend of comfort and striking visuals. The oversized fit mixed with premium fabric ensures you stand out while moving effortlessly through the concrete jungle.
            </p>
            <Link href="/collection" className="inline-block border-b-4 border-black text-black font-black uppercase tracking-widest text-lg hover:text-[#d91a1a] hover:border-[#d91a1a] w-fit transition-colors pb-1">
              Shop The Look
            </Link>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center mb-32">
          <div className="w-full lg:w-1/2 lg:pr-16 flex flex-col justify-center items-start lg:items-end text-left lg:text-right mt-10 lg:mt-0">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
              RAW<br/>TEXTURES
            </h2>
            <p className="text-xl text-neutral-500 font-bold tracking-widest uppercase mb-8">Unfiltered aesthetic</p>
            <p className="text-neutral-700 mb-10 leading-relaxed text-lg max-w-md">
              Muted tones meet vibrant accents. Redefining what it means to be bold without being loud. This piece speaks for itself.
            </p>
            <Link href="/collection" className="inline-block border-b-4 border-black text-black font-black uppercase tracking-widest text-lg hover:text-[#d91a1a] hover:border-[#d91a1a] transition-colors pb-1">
              Shop The Look
            </Link>
          </div>
          <div className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] bg-white p-3 md:p-5 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full h-full overflow-hidden border border-neutral-100 bg-[#f5f5f5]">
              <Image src="/product1.jpg" alt="Lookbook 2" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute -top-6 -left-6 bg-black text-white px-6 py-4 shadow-xl">
              <p className="font-black text-2xl uppercase tracking-tighter">Look 02</p>
            </div>
          </div>
        </div>
        
        {/* Full width CTA feature */}
        <div className="w-full bg-[#111111] text-white p-12 md:p-24 relative overflow-hidden shadow-[0_20px_50px_rgba(217,26,26,0.2)] mb-12">
          {/* Internal Noise for black section */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              THE <span className="text-[#d91a1a]">ESSENTIALS</span><br/>COLLECTION
            </h2>
            <Link href="/collection" className="bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest px-12 py-5 shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] transition-all">
              Explore Full Catalog
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
