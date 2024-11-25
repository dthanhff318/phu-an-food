import type { Metadata } from "next";
import "./globals.css";
import { Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "Thực phẩm Phú An",
  description: "Thực phẩm Phú An",
};

const oswald = Oswald({
  subsets: ["latin"], // Specify character sets
  weight: ["400", "500", "600", "700"], // Choose font weights
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/bananaicon.png" />
      <body className={`${oswald.className}`}>{children}</body>
    </html>
  );
}
