import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { PhotoIcon } from "@heroicons/react/24/solid";

interface IProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
}

export default function BoostPostModal({ isOpen, onOpenChange }: IProps) {
  return (
    <Modal
      hideCloseButton={true}
      size="3xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center items-center border-b">
              <p>Boost a Post</p>
            </ModalHeader>
            <ModalBody></ModalBody>
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
