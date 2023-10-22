import React, { ChangeEvent, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { nftStorageUpload } from "@/utils/nftStorage.util";
import { useWalletStore } from "@/store/wallet/wallet.store";
import { toast } from "react-toastify";
import Image from "next/image";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "@/gql/post.query";

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
  const { ownerId } = useWalletStore();
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);

  const [createPost, { data, loading, error }] = useMutation(CREATE_POST);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handlePost = async () => {
    if (!ownerId) {
      toast.error("Please connect your wallet");
      return;
    }
    if (!content) {
      toast.error("Please enter content");
      return;
    }
    if (!file) {
      toast.error("Please select an image");
      return;
    }
    setIsLoading(true);

    const uri = await nftStorageUpload(file!, ownerId, content);
    await createPost({ variables: { ipfsHash: uri.ipnft, ownerId } });
    toast.success("Post created successfully");

    setContent("");
    setFile(undefined);
    setIsLoading(false);

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
              rows={5}
              className="outline-none mt-2"
            />
            {file && (
              <div className="my-2">
                <Image
                  src={URL.createObjectURL(file)}
                  width={200}
                  height={500}
                  objectFit="cover"
                  alt="post-img"
                  className="rounded-md"
                />
              </div>
            )}
          </ModalBody>
          <ModalFooter className="border-t flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <label htmlFor="file">
                <PhotoIcon className="h-6 w-6 text-gray-500 cursor-pointer" />
              </label>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button
                isLoading={isLoading}
                onPress={handlePost}
                color="primary"
              >
                Post
              </Button>
            </div>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
}
