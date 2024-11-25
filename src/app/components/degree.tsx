const data = [
  {
    img: "/imgs/license1.jpg",
  },
  {
    img: "/imgs/license2.jpg",
  },
];

const Degree = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center px-4 sm:px-12 pt-4 pb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#071c1f]">
        Giấy phép chứng nhận
      </h2>
      <div className="flex gap-3 flex-wrap mt-4">
        {data.map((e) => (
          <div key={e.img} className="w-full flex justify-center">
            <img src={e.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Degree;
