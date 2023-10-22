import React from "react";
import { Button, Spinner, useDisclosure } from "@nextui-org/react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import CreateProfileModal from "./CreateProfileModal";
import { useQuery } from "@apollo/client";
import { GET_USER } from "@/gql/user.query";
import { Profile } from "../../../types/shoutGQL";
import { useWalletStore } from "@/store/wallet/wallet.store";

export default function CreateProfile() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { walletAddress, setOwnerId } = useWalletStore();

  const { loading, error, data, refetch } = useQuery<{ profile: Profile }>(
    GET_USER,
    {
      variables: { walletAddress },
      onCompleted: (data) => {
        if (data.profile) {
          setOwnerId(data.profile._id);
        }
      },
    }
  );

  const handleOpen = () => {
    if (!walletAddress) return;
    if (data?.profile) return;
    onOpen();
  };

  return (
    <>
      <CreateProfileModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={() => {
          refetch();
          onClose?.();
        }}
      />
      {walletAddress && (
        <Button
          disabled={loading || Boolean(data?.profile)}
          onClick={handleOpen}
          variant="bordered"
          startContent={loading ? null : <UserPlusIcon />}
        >
          {loading ? (
            <Spinner />
          ) : data?.profile ? (
            `@${data.profile.name}`
          ) : (
            "Create Profile"
          )}
        </Button>
      )}
    </>
  );
}
