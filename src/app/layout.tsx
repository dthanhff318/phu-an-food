import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Thực phẩm Phú An",
  description:
    "Hộ kinh doanh Thực phẩm Phú An - Chuyên cung cấp chuối sạch chất lượng cao",
};

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <link rel="icon" href="/bananaicon.png" />
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
