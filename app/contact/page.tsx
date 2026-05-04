import Navbar from "../../components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#e8e8e8] relative overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-20 w-full relative z-10 flex-1 flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none mb-10 text-center">
          LIÊN HỆ <span className="text-[#d91a1a]">VỚI CHÚNG TÔI</span>
        </h1>
        
        <div className="bg-white p-10 md:p-16 shadow-2xl rounded-2xl border border-neutral-100">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Tên</label>
                <input type="text" className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Email</label>
                <input type="email" className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-neutral-500 mb-2 uppercase tracking-widest">Tin Nhắn</label>
              <textarea rows={5} className="w-full border-2 border-neutral-200 p-4 rounded-lg focus:outline-none focus:border-[#d91a1a] font-medium transition-colors bg-neutral-50 focus:bg-white resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm px-8 py-5 shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] transition-all">
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
