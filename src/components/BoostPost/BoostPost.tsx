import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import BoostPostModal from "./BoostPostModal";

export default function BoostPost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <BoostPostModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <Button onClick={onOpen} size="sm" color="primary">
        Boost
      </Button>
    </>
  );
}
