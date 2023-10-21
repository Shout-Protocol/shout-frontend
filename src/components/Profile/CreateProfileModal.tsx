import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { PhotoIcon } from "@heroicons/react/24/solid";

interface IProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  onClose?: () => void;
}

export default function CreateProfileModal({ isOpen, onOpenChange }: IProps) {
  return (
    <Modal
      hideCloseButton={true}
      size="sm"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center items-center border-b">
              <p>Create a Shout Profile</p>
            </ModalHeader>
            <ModalBody>
              <div className="flex justify-center items-center space-x-5">
                <div className="rounded-full w-[90px] h-[90px] p-5 bg-gray-300">
                  <PhotoIcon className="text-gray-100" />
                </div>
                <div className="my-5">
                  <p className="mb-1 text-gray-600">@Username</p>
                  <Input
                    size={"lg"}
                    type="number"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="border-t flex justify-between items-center">
              <div className="flex items-center w-full justify-end">
                <Button fullWidth color="primary">
                  Create
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
