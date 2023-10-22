import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import WithdrawBoostModal from "./WithdrawBoostModal";

export default function WithdrawBoost() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <WithdrawBoostModal isOpen={isOpen} onOpenChange={onOpenChange} />
      <Button onClick={onOpen} size="sm" color="primary" variant="bordered">
        Withdraw
      </Button>
    </>
  );
}
