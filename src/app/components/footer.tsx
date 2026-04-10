"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a3a1a] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-4">
              Thực Phẩm{" "}
              <span className="text-[hsl(73,100%,45%)]">Phú An</span>
            </h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Chuyên cung cấp chuối sạch chất lượng cao. Hơn 5 năm kinh nghiệm
              phục vụ thị trường nội địa và đối tác doanh nghiệp.
            </p>
            <div className="mt-6 inline-block px-4 py-2 rounded-lg bg-white/10 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-wider">
                Phương châm
              </p>
              <p className="text-sm font-semibold text-[hsl(73,100%,45%)] mt-1">
                Chất lượng – Uy tín – Bền vững
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-bold mb-5">Thông tin liên hệ</h4>
            <div className="space-y-4">
              <a
                href="tel:0983316773"
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[hsl(73,100%,35%)] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">
                    Điện thoại
                  </p>
                  <p className="font-semibold group-hover:text-[hsl(73,100%,45%)] transition-colors">
                    0983 316 773
                  </p>
                </div>
              </a>
              <a
                href="mailto:phuanthucpham@gmail.com"
                className="flex items-start gap-3 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[hsl(73,100%,35%)] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">
                    Email
                  </p>
                  <p className="font-semibold group-hover:text-[hsl(73,100%,45%)] transition-colors">
                    phuanthucpham@gmail.com
                  </p>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wider">
                    Địa chỉ
                  </p>
                  <p className="font-semibold">
                    Thôn Hòa Mục, Hoàn Long, Yên Mỹ, Hưng Yên
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-bold mb-5">Liên kết nhanh</h4>
            <div className="space-y-3">
              {[
                { label: "Trang chủ", href: "#" },
                { label: "Về chúng tôi", href: "#about" },
                { label: "Sản phẩm", href: "#products" },
                { label: "Chứng nhận", href: "#certificates" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-white/60 hover:text-[hsl(73,100%,45%)] hover:translate-x-1 transition-all duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="tel:0983316773"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[hsl(73,100%,35%)] hover:bg-[hsl(73,100%,30%)] text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Liên hệ đặt hàng
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Hộ kinh doanh Thực phẩm Phú An.
            Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
