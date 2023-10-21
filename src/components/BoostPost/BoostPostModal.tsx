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
    description: "Stake sDAI",
    value: "spark",
    symbol: "sDAI",
    balance: 0,
  },
  {
    name: "Filecoin Network",
    description: "Stake Fil",
    value: "filecoin",
    symbol: "FIL",
    balance: 0,
  },
  {
    name: "Ape Coin",
    description: "Stake Ape",
    value: "ape",
    symbol: "APE",
    balance: 0,
  },
];

interface IProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

export default function BoostPostModal({ isOpen, onOpenChange }: IProps) {
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
              <p>Boost a Post</p>
            </ModalHeader>
            <ModalBody>
              <BoostSelector
                selectedProtocol={selectedProtocol}
                setSelectedProtocol={setSelectedProtocol}
                protocols={mockProtocols}
              />
              <div className="mb-3">
                <p className="mb-0.5 text-gray-500">Amount to Stake:</p>
                <Input
                  size={"lg"}
                  type="number"
                  placeholder="Enter your desired amount to stake"
                />
              </div>
            </ModalBody>

            <ModalFooter className="border-t flex justify-between items-center">
              <div className="flex items-center space-x-2 w-full justify-end">
                <Button color="primary">Boost</Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
