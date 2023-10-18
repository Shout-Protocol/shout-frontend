import React from "react";
import { Avatar, Input } from "@nextui-org/react";

export default function CreatePost() {
  return (
    <div className="w-full flex flex-col p-3">
      <p className="font-semibold text-xl">Create a Post</p>
      <div className="flex mt-3">
        <Avatar className="mr-3 text-white bg-gray-300 w-11" />
        <Input
          disabled
          type="text"
          placeholder="Share something awesome with the community !"
        />
      </div>
    </div>
  );
}
