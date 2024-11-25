import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const configData = [
  {
    title: "Nhà sản xuất",
    value: "HỘ KINH DOANH THỰC PHẨM PHÚ AN",
  },
  {
    title: "Địa chỉ",
    value: "Thôn Hòa Mục, Hoàn Long, Yên Mỹ, Hưng Yên",
  },
  {
    title: "Số chứng nhận ATTP",
    value: "04/2023/NNPTNT-HY",
  },
  {
    title: "Điện thoại",
    value: "0983 316 773",
  },
];

const About = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center px-4 sm:px-12 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#071c1f]">
        Về chúng tôi
      </h2>
      <Table>
        <TableBody>
          {configData.map((e) => {
            return (
              <TableRow key={e.title}>
                <TableCell className="font-bold text-left text-nowrap text-[#80b500]">
                  {e.title}
                </TableCell>
                <TableCell className="text-left text-base text-[#071c1f]">
                  {e.value}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <p className="mt-6">
        Sản phẩm của HKD Thực Phẩm Phú An cam kết đảm bảo an toàn vệ sinh thực
        phẩm, đầy đủ hồ sơ chứng minh chất lượng sản phẩm.
      </p>
    </div>
  );
};

export default About;
