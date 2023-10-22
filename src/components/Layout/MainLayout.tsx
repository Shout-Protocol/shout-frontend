import React from "react";
import TopNavbar from "./TopNavbar";
import { Inter } from "next/font/google";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${inter.className} custom-light flex flex-col h-screen w-full items-center`}
    >
      <TopNavbar />
      <div className="border-b w-full" />
      <div className="grid grid-cols-12 flex-1 w-full max-w-[1200px]">
        <div className="col-span-3 h-full border-r py-5 px-7">
          <LeftSidebar />
        </div>
        <div className="col-span-5 h-full">{children}</div>
        <div className="col-span-4 h-full border-l py-5 px-7">
          <RightSidebar />
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
