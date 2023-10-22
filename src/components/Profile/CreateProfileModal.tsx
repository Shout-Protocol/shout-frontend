import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Spinner,
} from "@nextui-org/react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMutation } from "@apollo/client";
import { useWalletStore } from "@/store/wallet/wallet.store";
import { CREATE_USER } from "@/gql/user.query";

interface IProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  onClose: () => void;
}

export default function CreateProfileModal({
  isOpen,
  onOpenChange,
  onClose,
}: IProps) {
  const { walletAddress } = useWalletStore();
  const [username, setUsername] = useState("");
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleCreateProfile = async () => {
    await createUser({ variables: { walletAddress, name: username } });
    onClose();
  };

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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    size={"lg"}
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter className="border-t flex justify-between items-center">
              <div className="flex items-center w-full justify-end">
                <Button onClick={handleCreateProfile} fullWidth color="primary">
                  {loading ? <Spinner /> : "Create Profile"}
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
