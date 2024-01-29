import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/page"
import TopHeader from "@/components/header/top-nav";
import Navbar from "@/components/header/main-nav";
import { CatMenu } from "@/components/header/cat-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Цэцэгт мэндчилгээ",
  description: "Монголын хамгийн enjoyable цэцгийн Астра дэлгүүр.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopHeader />
        <Navbar />
        <CatMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
