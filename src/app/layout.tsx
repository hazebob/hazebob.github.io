import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "프로그래밍과 개발에 대한 이야기를 공유합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
