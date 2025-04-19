import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s - TreeDeep',
    default: 'TreeDeep - 专业的软件开发服务提供商',
  },
  description: "TreeDeep提供小程序开发、官网开发、APP开发、后台管理系统开发等全方位软件开发服务",
  keywords: '小程序开发, 官网开发, APP开发, 后台管理系统, 软件开发, 定制开发',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
