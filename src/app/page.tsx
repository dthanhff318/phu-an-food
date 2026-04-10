"use client";

import About from "@/app/components/about";
import Degree from "@/app/components/degree";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Products from "@/app/components/products";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/imgs/bananaBg.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

          <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                100% Thực phẩm sạch & An toàn
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Thực Phẩm
              <span className="text-[hsl(73,100%,45%)]"> Phú An</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Chuyên cung cấp chuối sạch chất lượng cao — Nguồn hàng ổn định,
              giá cả cạnh tranh, giao hàng nhanh chóng
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <a
                href="#about"
                className="px-8 py-4 bg-[hsl(73,100%,35%)] hover:bg-[hsl(73,100%,30%)] text-white rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Tìm hiểu thêm
              </a>
              <a
                href="tel:0983316773"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Liên hệ ngay
              </a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-white/60" />
          </motion.div>
        </section>

        <About />
        <Products />
        <Degree />
      </main>
      <Footer />
    </div>
  );
}
