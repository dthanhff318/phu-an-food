"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Building2,
  MapPin,
  FileCheck,
  Phone,
} from "lucide-react";

const companyInfo = [
  {
    icon: Building2,
    title: "Nhà sản xuất",
    value: "HỘ KINH DOANH THỰC PHẨM PHÚ AN",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "Thôn Hòa Mục, Hoàn Long, Yên Mỹ, Hưng Yên",
  },
  {
    icon: FileCheck,
    title: "Số chứng nhận ATTP",
    value: "04/2023/NNPTNT-HY",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    value: "0983 316 773",
  },
];

const commitments = [
  {
    icon: Leaf,
    title: "Nguồn hàng rõ ràng",
    description: "Tuyển chọn kỹ lưỡng từ vùng trồng đạt tiêu chuẩn",
  },
  {
    icon: ShieldCheck,
    title: "Sản phẩm sạch",
    description: "An toàn vệ sinh thực phẩm, đầy đủ chứng nhận",
  },
  {
    icon: BadgeDollarSign,
    title: "Giá cả cạnh tranh",
    description: "Hợp lý cho mọi đối tác và khách hàng",
  },
  {
    icon: Truck,
    title: "Giao hàng nhanh",
    description: "Đúng tiến độ, đảm bảo độ tươi ngon",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(73,40%,93%)] text-[hsl(73,100%,30%)] text-sm font-semibold mb-4">
            Giới thiệu
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a1a] font-[family-name:var(--font-playfair)]">
            Về chúng tôi
          </h2>
          <div className="w-20 h-1 bg-[hsl(73,100%,35%)] mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-[#1a3a1a]">
                  Hộ kinh doanh Thực phẩm Phú An
                </strong>{" "}
                tự hào là đơn vị có hơn{" "}
                <span className="text-[hsl(73,100%,30%)] font-semibold">
                  5 năm kinh nghiệm
                </span>{" "}
                trong lĩnh vực cung cấp chuối sạch, phục vụ thị trường nội địa
                và đối tác doanh nghiệp.
              </p>
              <p>
                Chúng tôi chuyên cung cấp các loại chuối chất lượng cao như:{" "}
                <strong>chuối tây, chuối tiêu…</strong> được tuyển chọn kỹ lưỡng
                từ vùng trồng đạt tiêu chuẩn, đảm bảo độ tươi ngon, an toàn vệ
                sinh thực phẩm và ổn định nguồn cung.
              </p>
              <p>
                Với phương châm{" "}
                <span className="inline-block px-3 py-1 bg-[hsl(73,40%,93%)] text-[hsl(73,100%,28%)] rounded-lg font-semibold text-sm">
                  &ldquo;Chất lượng – Uy tín – Bền vững&rdquo;
                </span>
                , Phú An không ngừng nâng cao quy trình thu mua, bảo quản và
                phân phối nhằm mang đến sản phẩm tốt nhất cho khách hàng.
              </p>
              <p>
                Phú An luôn mong muốn trở thành đối tác tin cậy của các cửa
                hàng, siêu thị, bếp ăn công nghiệp và doanh nghiệp trên toàn
                quốc.
              </p>
            </div>

            {/* Company info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {companyInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-[hsl(73,40%,95%)] transition-colors duration-300"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(73,100%,35%)] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        {info.title}
                      </p>
                      <p className="text-sm font-semibold text-[#1a3a1a] mt-0.5 break-words">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: commitments */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#1a3a1a] mb-6">
              Chúng tôi cam kết
            </h3>
            <div className="space-y-4">
              {commitments.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="group flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-gray-100 bg-white hover:border-[hsl(73,100%,35%)] hover:shadow-lg transition-all duration-300"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[hsl(73,40%,93%)] group-hover:bg-[hsl(73,100%,35%)] flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[hsl(73,100%,30%)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a3a1a] text-lg">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Trust badge */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[hsl(73,40%,95%)] to-[hsl(73,30%,90%)] border border-[hsl(73,30%,85%)]">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-[hsl(73,100%,30%)]" />
                <h4 className="font-bold text-[#1a3a1a]">
                  An toàn vệ sinh thực phẩm
                </h4>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sản phẩm của HKD Thực Phẩm Phú An cam kết đảm bảo an toàn vệ
                sinh thực phẩm, đầy đủ hồ sơ chứng minh chất lượng sản phẩm.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
