import Navbar from "../../components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function LookbookPage() {
  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#031f41] relative overflow-hidden">
      {/* Background Noise */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      ></div>

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12 w-full relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b-4 border-black pb-8 gap-8">
          <div>
            <p className="text-[#d91a1a] font-bold tracking-[0.2em] uppercase mb-4">
              Tập 01
            </p>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none">
              BẢN GIAO HƯỞNG
              <br />
              ĐÔ THỊ
            </h1>
          </div>
          <div className="md:max-w-sm">
            <p className="text-white font-medium leading-relaxed">
              Bộ sưu tập mới nhất của chúng tôi khám phá sự giao thoa giữa kiến
              trúc thô mộc và chuyển động đường phố mượt mà. Được thiết kế cho
              môi trường hiện đại.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-32">
          <div className="w-full lg:w-1/2 relative aspect-[3/4] bg-white p-3 md:p-5 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full h-full overflow-hidden border border-neutral-100 bg-[#f5f5f5]">
              <Image
                src="/lb1.png"
                alt="Lookbook 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#d91a1a] text-white px-6 py-4 shadow-xl">
              <p className="font-black text-2xl uppercase tracking-tighter">
                Look 01
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16 flex flex-col justify-center mt-10 lg:mt-0">
            <h2 className="text-5xl md:text-7xl font-white text-white uppercase tracking-tighter mb-4 leading-[0.9]">
              SẴN SÀNG
              <br />
              XUỐNG PHỐ
            </h2>
            <p className="text-xl text-neutral-500 font-bold tracking-widest uppercase mb-8">
              Nâng tầm phong cách mỗi ngày
            </p>
            <p className="text-white mb-10 leading-relaxed text-lg max-w-md">
              Sự pha trộn giữa sự thoải mái và hình ảnh nổi bật. Form dáng rộng
              kết hợp với chất liệu vải cao cấp đảm bảo bạn luôn nổi bật khi di
              chuyển dễ dàng qua khu rừng bê tông.
            </p>
            <Link
              href="/collection"
              className="inline-block border-b-4 border-white text-white font-white uppercase tracking-widest text-lg hover:text-[#d91a1a] hover:border-[#d91a1a] w-fit transition-colors pb-1"
            >
              Mua Set Đồ Này
            </Link>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-center mb-32">
          <div className="w-full lg:w-1/2 lg:pr-16 flex flex-col justify-center items-start lg:items-end text-left lg:text-right mt-10 lg:mt-0">
            <h2 className="text-5xl md:text-7xl font-white text-white uppercase tracking-tighter mb-4 leading-[0.9]">
              KẾT CẤU
              <br />
              THÔ MỘC
            </h2>
            <p className="text-xl text-neutral-500 font-bold tracking-widest uppercase mb-8">
              Thẩm mỹ nguyên bản
            </p>
            <p className="text-white mb-10 leading-relaxed text-lg max-w-md">
              Tông màu trầm gặp gỡ những điểm nhấn sống động. Định nghĩa lại thế
              nào là táo bạo mà không cần phô trương. Món đồ này tự nói lên tất
              cả.
            </p>
            <Link
              href="/collection"
              className="inline-block border-b-4 border-white text-white font-black uppercase tracking-widest text-lg hover:text-[#d91a1a] hover:border-[#d91a1a] transition-colors pb-1"
            >
              Mua Set Đồ Này
            </Link>
          </div>
          <div className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] bg-white p-3 md:p-5 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="relative w-full h-full overflow-hidden border border-neutral-100 bg-[#f5f5f5]">
              <Image
                src="/lb2.png"
                alt="Lookbook 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-black text-white px-6 py-4 shadow-xl">
              <p className="font-black text-2xl uppercase tracking-tighter">
                Look 02
              </p>
            </div>
          </div>
        </div>

        {/* Full width CTA feature */}
        <div className="w-full bg-[#111111] text-white p-12 md:p-24 relative overflow-hidden shadow-[0_20px_50px_rgba(217,26,26,0.2)] mb-12">
          {/* Internal Noise for black section */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
            }}
          ></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
              BỘ SƯU TẬP <span className="text-[#d91a1a]">THIẾT YẾU</span>
            </h2>
            <Link
              href="/collection"
              className="bg-[#d91a1a] hover:bg-red-700 text-white font-bold uppercase tracking-widest px-12 py-5 shadow-[0_4px_14px_0_rgba(217,26,26,0.39)] transition-all"
            >
              Khám Phá Toàn Bộ Danh Mục
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
