import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20 w-full relative z-10 flex-1 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none mb-10 text-center">
          ABOUT <span className="text-[#d91a1a]">DUANE LA</span>
        </h1>
        
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-2xl border border-neutral-100">
          <p className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#d91a1a] mb-6">
            Youth Culture / Since 2026
          </p>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-medium mb-8">
            Duane LA was born out of a desire to bridge the gap between premium streetwear and accessible fashion. We believe that detail makes the difference, and our polo collections reflect exactly that.
          </p>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed font-medium">
            Designed in Los Angeles, every piece is crafted to define your identity. We don't just make clothes; we cultivate a dynamic lifestyle for the younger generation.
          </p>
        </div>
      </div>
    </main>
  );
}
