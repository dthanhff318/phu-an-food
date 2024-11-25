import { motion } from "framer-motion";

const productData = [
  {
    src: "/imgs/banana.jpg",
    name: "",
  },
  {
    src: "/imgs/banana5.webp",
    name: "",
  },
  {
    src: "/imgs/banana4.webp",
    name: "",
  },
];
const Products = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center px-4 sm:px-12 pt-4 pb-6 bg-[#f7f5eb]">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#071c1f]">
        Sản phẩm tiêu biểu
      </h2>
      <div className="flex gap-3 flex-wrap mt-4">
        {productData.map((e, i) => {
          return <ProductItem key={i} src={e.src} name={e.name} />;
        })}
      </div>
    </div>
  );
};

export default Products;

const ProductItem = ({ src, name }: { src: string; name: string }) => {
  return (
    <motion.div
      className="w-full h-[300px] overflow-hidden rounded-lg"
      initial={{ x: "30%", opacity: 0 }}
      transition={{ duration: 0.3, ease: "linear" }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <motion.img src={src} alt={name} className="w-full h-full object-cover" />
    </motion.div>
  );
};
