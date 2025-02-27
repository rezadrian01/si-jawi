import type { Metadata } from "next";
import { Noto_Traditional_Nushu } from "next/font/google";
import "../globals.css";
import Navbar from "./components/navbar";
import LayoutWrapper from "./components/layout-wrapper";

const notoTraditionalNushu = Noto_Traditional_Nushu({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sinau Basa Jawi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${notoTraditionalNushu.className} antialiased bg-primary-color`}
      >
        <Navbar />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
