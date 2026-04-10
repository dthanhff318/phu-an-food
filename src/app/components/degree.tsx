"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    img: "/imgs/license1.jpg",
    title: "Giấy chứng nhận ATTP",
  },
  {
    img: "/imgs/license2.jpg",
    title: "Giấy phép kinh doanh",
  },
  {
    img: "/imgs/license3.png",
    title: "Chứng nhận VietGAP",
  },
];

const Degree = () => {
  return (
    <section id="certificates" className="py-16 sm:py-24 bg-white">
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
            Chứng nhận
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a1a] font-[family-name:var(--font-playfair)]">
            Giấy phép chứng nhận
          </h2>
          <div className="w-20 h-1 bg-[hsl(73,100%,35%)] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Đầy đủ hồ sơ pháp lý, đảm bảo uy tín và chất lượng sản phẩm
          </p>
        </motion.div>

        {/* Certificates grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {data.map((item, i) => (
            <motion.div
              key={item.img}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 hover:border-[hsl(73,100%,35%)] hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="p-4 sm:p-6">
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="px-6 pb-5 text-center">
                <h3 className="font-semibold text-[#1a3a1a] text-lg">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Degree;
