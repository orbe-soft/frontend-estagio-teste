import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bike Store",
  description: "Loja e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-br" className={sora.className}>
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
}
