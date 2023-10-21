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

export default function CreatePostModal({ isOpen, onOpenChange }: IProps) {
  return (
    <Modal
      hideCloseButton={true}
      size="4xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center items-center border-b">
              <p>Create a Post</p>
            </ModalHeader>
            <ModalBody>
              <textarea
                autoFocus={true}
                placeholder="What's on your mind ?"
                rows={14}
                className="outline-none mt-2"
              />
            </ModalBody>
            <ModalFooter className="border-t flex justify-between items-center">
              <PhotoIcon className="h-7 w-7 text-gray-400 cursor-pointer hover:text-gray-500" />
              <div className="flex items-center space-x-2">
                <Button color="primary">Post</Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
