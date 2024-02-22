import Image from "next/image";
import { Inter } from "next/font/google";

import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <div className="flex flex-col lg:flex-row lg:h-full lg:items-center lg:gap-12">
          <div className="bg-auth-bg bg-cover bg-center bg-no-repeat min-h-[430px] lg:min-h-[100%] lg:max-w-[50%] flex-1">
            <Image
              alt="logo"
              src={"/logo.png"}
              width={105}
              height={24}
              className="m-auto pt-8"
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
