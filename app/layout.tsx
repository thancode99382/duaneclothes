import type { Metadata } from "next";
import { Bebas_Neue, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duane LA - Quần Áo Dạo Phố",
  description: "Bộ sưu tập áo polo streetwear cao cấp dành cho thế hệ trẻ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${bebasNeue.variable} ${geistMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <footer className="mt-auto bg-black text-white border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                {/* Brand */}
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-2">Thương hiệu</p>
                  <p
                    className="text-2xl font-bold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.15em" }}
                  >
                    DUANE CLOTHES
                  </p>
                  <p className="text-white/50 text-xs mt-1 tracking-wider uppercase">
                    CÔNG TY TNHH DUANE CLOTHES
                  </p>
                </div>

                {/* Contact info */}
                <div className="flex flex-col gap-3 text-sm text-white/70">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span>27 Hùng Vương, Phường Hải Châu, Tp. Đà Nẵng</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <a href="tel:19000440" className="hover:text-white transition-colors">1900.0440</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <a href="mailto:duaneclothes@gmail.com" className="hover:text-white transition-colors">duaneclothes@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-xs text-white/30">
                <p>© {new Date().getFullYear()} CÔNG TY TNHH DUANE CLOTHES. Bảo lưu mọi quyền.</p>
                <p className="uppercase tracking-widest">Đà Nẵng, Việt Nam</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
