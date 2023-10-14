import { LEFT_SIDEBAR_MENU } from "@/constants/menu";
import { useRouter } from "next/router";
import React from "react";

export default function LeftSidebar() {
  const router = useRouter();

  return (
    <div className="py-5 space-y-5 select-none text-gray-800">
      {LEFT_SIDEBAR_MENU.map((item) => {
        const isActived =
          item.path === "/"
            ? router.pathname === "/"
            : router.pathname.includes(item.path);
        return (
          <div
            onClick={() => {
              //TODO: replace this with real wallet address
              if (item.path === "/profile") router.push(`/profile/${"0x123"}`);
              else router.push(item.path);
            }}
            key={item.path}
            className={`flex items-center space-x-5 ${
              isActived ? "cursor-default" : "cursor-pointer hover:opacity-70"
            }`}
          >
            <div className="w-7 h-7">
              {isActived ? <item.solidIcon /> : <item.icon />}
            </div>
            <p
              className={`${
                isActived ? "font-semibold" : "font-normal"
              } text-2xl`}
            >
              {item.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
