import { LEFT_SIDEBAR_MENU } from "@/constants/menu";
import { useRouter } from "next/router";
import React from "react";

export default function LeftSidebar() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col pb-10  space-y-5 select-none text-gray-800 w-full">
        {LEFT_SIDEBAR_MENU.map((item) => {
          const isActived =
            item.path === "/"
              ? router.pathname === "/"
              : router.pathname.includes(item.path);
          return (
            <div
              onClick={() => {
                //TODO: replace this with real wallet address
                if (item.path === "/profile")
                  router.push(
                    `/profile/${"0x12fc5171bcb1acFF92D94f2a99bd394C613FAf58"}`
                  );
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
      <p className="text-gray-500 text-sm">© 2023 Shout Protocol</p>
    </>
  );
}
