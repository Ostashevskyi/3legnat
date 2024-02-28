import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "3legant",
  description: "E-Commerce Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar />
        </header>
        <AuthProvider>
          <main className="min-container">{children}</main>
        </AuthProvider>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
