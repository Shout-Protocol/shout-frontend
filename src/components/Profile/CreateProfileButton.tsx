import React from "react";
import { Button } from "@nextui-org/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";

export default function CreateProfileButton() {
  return (
    <Button
      variant="bordered"
      startContent={<UserPlusIcon className="text-gray-800 w-5 h-5" />}
    >
      Create Profile
    </Button>
  );
}
