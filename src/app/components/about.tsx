import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const configData = [
  {
    title: "Nhà sản xuất",
    value: "Hợp tác xã dịch vụ nông nghiệp Tịnh Thới",
  },
  {
    title: "Địa chỉ",
    value:
      "Ấp Tịnh Châu, ấp Tịnh Long, ấp Tịnh Hưng, ấp Tịnh Mỹ, xã Tịnh Thới, thành phố Cao Lanh, tỉnh Đồng Tháp",
  },
  {
    title: "Mã số",
    value: "VietGap-TT-13-04-87-0102",
  },
  {
    title: "Điện thoại",
    value: "0939 142 143",
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
    </div>
  );
};

export default About;
