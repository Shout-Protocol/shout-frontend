import {
  HeartIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function FeedPost() {
  return (
    <>
      <div className="p-3 pt-0.5">
        <div className="flex items-center">
          <Avatar className="mr-2 text-white bg-gray-300 w-10 h-10" />
          <div className="flex flex-col">
            <div className="flex items-center">
              <p className="text-gray-500">1h</p>
              <p className="text-gray-500 ml-2">@satosheep</p>
            </div>
            <h1 className="font-semibold text-md">0x123..abc</h1>
          </div>
        </div>
        <p className="my-2">Hello, World !</p>
        <div className="w-full h-[500px] relative">
          <Image
            className="rounded-md"
            alt="thumbnail"
            src={
              "https://res.cloudinary.com/daily-now/image/upload/f_auto/v1/placeholders/3"
            }
            layout="fill"
          />
        </div>
        <div className="flex items-center mt-3">
          <HeartIcon className="w-7" />
          <p>0</p>
          <ChatBubbleBottomCenterIcon className="w-7 ml-3" />
          <p>0</p>
        </div>
        <hr className="mt-3" />
      </div>
    </>
  );
}
