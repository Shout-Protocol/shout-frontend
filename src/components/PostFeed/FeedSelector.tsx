import { FEED_TYPE_MENU } from "@/constants/menu";
import React from "react";

interface IProps {
  feedType: string[];
  selected: string;
  setSelected: React.Dispatch<
    React.SetStateAction<keyof typeof FEED_TYPE_MENU>
  >;
}

export default function FeedSelector({
  feedType,
  selected,
  setSelected,
}: IProps) {
  return (
    <div className="space-y-3 my-3 px-5 overflow-x-scroll">
      <hr />
      <div className="flex space-x-3">
        {feedType.map((item) => {
          const isActive = item === selected;
          return (
            <div
              onClick={() => setSelected(item as keyof typeof FEED_TYPE_MENU)}
              key={item}
              className={`${
                isActive
                  ? "bg-[#FEF4FF] text-[#E879F9] cursor-default"
                  : "bg-gray-100 text-gray-700 cursor-pointer hover:opacity-75"
              } p-1.5 rounded-xl px-7 font-medium select-none`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}
