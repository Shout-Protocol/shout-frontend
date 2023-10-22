import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import BoostSelector from "./BoostSelector";

const mockProtocols = [
  {
    name: "Spark Protocol",
    description: "Withdraw sDAI",
    value: "spark",
    symbol: "sDAI",
    balance: 0,
  },
  {
    name: "Filecoin Network",
    description: "Withdraw Fil",
    value: "filecoin",
    symbol: "FIL",
    balance: 0,
  },
  {
    name: "Ape Coin",
    description: "Withdraw Ape",
    value: "ape",
    symbol: "APE",
    balance: 0,
  },
];

interface IProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

export default function WithdrawBoostModal({ isOpen, onOpenChange }: IProps) {
  const [selectedProtocol, setSelectedProtocol] = useState("");

  return (
    <Modal
      hideCloseButton={true}
      size="lg"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center items-center border-b">
              <p>Withdraw boost from Post</p>
            </ModalHeader>
            <ModalBody>
              <div className="mb-3">
                <BoostSelector
                  label="Choose a protocol to de-boost with:"
                  selectedProtocol={selectedProtocol}
                  setSelectedProtocol={setSelectedProtocol}
                  protocols={mockProtocols}
                />
                <p className="mb-0.5 mt-3 text-gray-500">Amount to Withdraw:</p>
                <Input
                  size={"lg"}
                  type="number"
                  placeholder="Enter your desired amount to withdraw"
                />
              </div>
            </ModalBody>

            <ModalFooter className="border-t flex justify-between items-center">
              <div className="flex items-center space-x-2 w-full justify-end">
                <Button color="primary">Withdraw</Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
