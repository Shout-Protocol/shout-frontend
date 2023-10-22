import React, { useState } from "react";
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
  onClose: () => void;
}

export default function CreatePostModal({
  isOpen,
  onOpenChange,
  onClose,
}: IProps) {
  const [content, setContent] = useState("");

  const handlePost = async () => {
    onClose();
  };

  return (
    <Modal
      hideCloseButton={true}
      size="2xl"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        <>
          <ModalHeader className="flex justify-center items-center border-b">
            <p>Create a Post</p>
          </ModalHeader>
          <ModalBody>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              autoFocus={true}
              placeholder="What's on your mind ?"
              rows={14}
              className="outline-none mt-2"
            />
          </ModalBody>
          <ModalFooter className="border-t flex justify-between items-center">
            <PhotoIcon className="h-7 w-7 text-gray-400 cursor-pointer hover:text-gray-500" />
            <div className="flex items-center space-x-2">
              <Button onPress={handlePost} color="primary">
                Post
              </Button>
            </div>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
