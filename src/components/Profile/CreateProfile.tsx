import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import CreateProfileModal from "./CreateProfileModal";

export default function CreateProfile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <CreateProfileModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <Button
        onClick={onOpen}
        variant="bordered"
        startContent={<UserPlusIcon className="text-gray-800 w-5 h-5" />}
      >
        Create Profile
      </Button>
    </>
  );
}
