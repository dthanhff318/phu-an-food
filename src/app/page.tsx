"use client";

import About from "@/app/components/about";
import Degree from "@/app/components/degree";
import Footer from "@/app/components/footer";
import Products from "@/app/components/products";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="w-full">
        <div className="sm:px-12 px-3 flex items-center justify-between bg-[#f7f5eb] py-3 text-sm font-bold border-[1px] border-solid border-gray">
          <div>
            <p className="text-[#071c1f]">Huyện Yên Mỹ, tỉnh Hưng Yên</p>
          </div>
          <div>
            <p className="text-[#071c1f]">phuanthucpham@gmail.com</p>
          </div>
        </div>
        <div className="w-full h-[400px] flex-col flex sm:flex-row items-center justify-center sm:justify-around gap-4 bg-[#f7f5eb]">
          <div className="flex flex-col gap-4 items-center justify-center">
            <span className="flex gap-2 items-center">
              <Image
                src="https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/icons/icon-img/1.png"
                alt="Fruit"
                width={28}
                height={28}
                objectFit="contain"
              />
              <p className="font-bold text-[#071c1f]">100% Thực phẩm sạch</p>
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071c1f]">
              Thực phẩm hữu cơ <br /> Ngon và tốt cho sức khỏe
            </h2>
          </div>
          <motion.img
            src="/imgs/bananaBg.png"
            alt="Fruit"
            className="w-[90%] sm:w-[662px] h-auto sm:h-[380px]"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            animate={{ opacity: 1 }}
          />
        </div>
        <About />
        <Products />
        <Degree />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
