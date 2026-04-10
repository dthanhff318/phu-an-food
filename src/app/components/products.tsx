"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const productData = [
  {
    src: "/imgs/banana.jpg",
    name: "Chuối tiêu",
  },
  {
    src: "/imgs/banana5.webp",
    name: "Chuối tây",
  },
  {
    src: "/imgs/banana6.webp",
    name: "Chuối sạch",
  },
  {
    src: "/imgs/banana4.webp",
    name: "Chuối chất lượng cao",
  },
  {
    src: "/imgs/banana7.png",
    name: "Chuối tiêu",
  },
  {
    src: "/imgs/banana8.png",
    name: "Chuối sỉ",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#f8f6ef] to-[#f0eddf]"
    >
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
            Sản phẩm
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a3a1a] font-[family-name:var(--font-playfair)]">
            Sản phẩm tiêu biểu
          </h2>
          <div className="w-20 h-1 bg-[hsl(73,100%,35%)] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Các loại chuối chất lượng cao, được tuyển chọn kỹ lưỡng từ vùng
            trồng đạt tiêu chuẩn
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {productData.map((product, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
