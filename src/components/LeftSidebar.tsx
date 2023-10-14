import { LEFT_SIDEBAR_MENU } from "@/constants/menu";
import { useRouter } from "next/router";
import React from "react";

export default function LeftSidebar() {
  const router = useRouter();

  return (
    <div className="px-5 lg:px-20 py-5 space-y-5 select-none">
      {LEFT_SIDEBAR_MENU.map((item) => {
        const isActived =
          item.path === "/"
            ? router.pathname === "/"
            : router.pathname.includes(item.path);
        return (
          <div
            onClick={() => {
              if (item.path === "/profile") router.push(`/profile/${"0x123"}`);
              else router.push(item.path);
            }}
            key={item.path}
            className={`flex items-center space-x-3 ${
              isActived ? "cursor-default" : "cursor-pointer hover:opacity-70"
            }`}
          >
            <div className="w-6 h-6">
              {isActived ? <item.solidIcon /> : <item.icon />}
            </div>
            <div
              className={`${
                isActived ? "font-semibold" : "font-normal"
              } text-xl`}
            >
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
