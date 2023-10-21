import React from "react";
import { Avatar, useDisclosure } from "@nextui-org/react";
import CreatePostModal from "./CreatePostModal";

export default function CreatePost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full flex flex-col p-3">
      <CreatePostModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <p className="font-semibold text-xl">Create a Post</p>
      <div className="flex mt-3">
        <Avatar className="mr-3 text-white bg-gray-300 w-11" />
        <div
          onClick={onOpen}
          className="w-full bg-gray-100 text-gray-400 rounded-xl hover:bg-gray-200 cursor-pointer"
        >
          <p className="p-3">Share something awesome with the community !</p>
        </div>
      </div>
    </div>
  );
}
