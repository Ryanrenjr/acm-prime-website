import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACM Prime | 战略增长与跨国扩张咨询",
  description: "搭建英国与中国市场之间的桥梁，将长期愿景转化为可衡量的成功成果。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
