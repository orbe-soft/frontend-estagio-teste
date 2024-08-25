import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/app/styles/globals.scss";
import Header from "@/app/components/header/header";

const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export const metadata: Metadata = {
  title: "Bike Store",
  description: "Teste Front End Orbe Soft",
  icons: ["/favicon.ico"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={sora.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
