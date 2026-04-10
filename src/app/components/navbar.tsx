"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Trang chủ", href: "#" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Chứng nhận", href: "#certificates" },
  { label: "Liên hệ", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#1a3a1a] text-white/80 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              Huyện Yên Mỹ, tỉnh Hưng Yên
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              phuanthucpham@gmail.com
            </span>
          </div>
          <a
            href="tel:0983316773"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            0983 316 773
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-white/95 backdrop-blur-md shadow-lg"
            : "top-0 md:top-[36px] bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/bananaicon.png"
                alt="Phú An Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span
                  className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                    scrolled ? "text-[#1a3a1a]" : "text-white"
                  }`}
                >
                  Phú An
                </span>
                <span
                  className={`hidden sm:block text-xs transition-colors duration-300 ${
                    scrolled ? "text-gray-500" : "text-white/60"
                  }`}
                >
                  Thực phẩm sạch
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-[hsl(73,100%,30%)] hover:bg-[hsl(73,40%,93%)]"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <a
              href="tel:0983316773"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[hsl(73,100%,35%)] hover:bg-[hsl(73,100%,30%)] text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Gọi ngay
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t shadow-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:text-[hsl(73,100%,30%)] hover:bg-[hsl(73,40%,95%)] font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:0983316773"
                  className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-[hsl(73,100%,35%)] text-white rounded-xl font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  0983 316 773
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
