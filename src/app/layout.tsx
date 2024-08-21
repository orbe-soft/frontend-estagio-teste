
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Container from "./components/container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Providers from "./providers/provider";

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
      
      <body>
      
       
       <Providers>
        <Header/>
          <main className="overflow-auto flex-1 lg:mx-1 flex">
          <Container>
          
              {children}
      
          </Container>
          </main>
        </Providers>
       
     
      </body>
    </html>
   
  );
}
