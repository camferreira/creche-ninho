import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import Navbar from "@/components/layout/Navbar";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Associação de Solidariedade Social O Ninho",
  description:
    "Creche em Évora dedicada ao desenvolvimento, segurança e bem-estar das crianças.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body className="min-h-screen">
        <Navbar />

        <main>{children}</main>

        {/* Mais tarde */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}