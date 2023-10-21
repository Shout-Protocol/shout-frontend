import React from "react";
import TopNavbar from "./TopNavbar";
import { Inter } from "next/font/google";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${inter.className} custom-light flex flex-col h-screen`}>
      <TopNavbar />
      <div className="grid grid-cols-7 flex-1">
        <div className="col-span-2 h-full border-r px-5 lg:px-24 flex flex-col pb-10">
          <LeftSidebar />
          <p className="mt-auto text-gray-500 text-sm">© 2023 Shout Protocol</p>
        </div>
        <div className="col-span-3 h-full">{children}</div>
        <div className="col-span-2 h-full border-l">
          <RightSidebar />
        </div>
      </div>
    </main>
  );
}
