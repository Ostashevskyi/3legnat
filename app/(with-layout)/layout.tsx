import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "../providers";
import { ReduxProvider } from "@/redux/Provider";
import { Toaster } from "sonner";

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
        <AuthProvider>
          <ReduxProvider>
            <header>
              <Navbar />
            </header>
            <main className="min-container">{children}</main>
            <footer>
              <Footer />
            </footer>
            <Toaster expand richColors position="top-right" />
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
