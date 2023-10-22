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
import tokenContractService from "@/services/contracts/tokenContract.service";
import { CONTRACT_ADDRESS } from "@/constants/address.constant";
import { useProvider } from "@/hooks/provider.hook";
import { parseEther } from "ethers/lib/utils";
import { Signer } from "ethers";
import { toast } from "react-toastify";
import shouterContractService from "@/services/contracts/shouterContract.service";

const mockProtocols = [
  {
    name: "Stake sDAI",
    description: "Spark Protocol",
    value: "spark",
    symbol: "sDAI",
    balance: 0,
    vaultId: 1,
  },
  {
    name: "Stake Fil",
    description: "Filcoin Netowrk",
    value: "filecoin",
    symbol: "FIL",
    balance: 0,
    vaultId: 2,
  },
  {
    name: "Stake Ape",
    description: "Ape Coin",
    value: "ape",
    symbol: "APE",
    balance: 0,
    vaultId: 3,
  },
];

interface IProps {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  ipfsHash: string;
}

export default function BoostPostModal({
  isOpen,
  onOpenChange,
  ipfsHash,
}: IProps) {
  const [selectedProtocol, setSelectedProtocol] = useState(
    mockProtocols[0].value || ""
  );

  console.log(ipfsHash);

  const [amount, setAmount] = useState("");

  const [isApproving, setIsApproving] = useState(false);
  const [isBoosting, setIsBoosting] = useState(false);

  const { provider } = useProvider();

  const handleApprove = async () => {
    setIsApproving(true);
    try {
      const tx = await tokenContractService.approve(
        CONTRACT_ADDRESS["0x5"].TestERC20,
        provider?.getSigner() as Signer,
        CONTRACT_ADDRESS["0x5"].Shouter,
        parseEther(amount)
      );
      await tx.wait();
      toast.success("Approve successfully");
    } catch (err) {
      console.log(err);
    }
    setIsApproving(false);
  };

  const handleBoost = async () => {
    setIsBoosting(true);
    console.log(
      CONTRACT_ADDRESS["0x5"].Shouter,
      provider?.getSigner() as Signer,
      ipfsHash,
      parseEther(amount),
      1
    );
    try {
      const tx = await shouterContractService.createAndBoostPost(
        CONTRACT_ADDRESS["0x5"].Shouter,
        provider?.getSigner() as Signer,
        ipfsHash,
        1,
        parseEther(amount)
      );
      await tx.wait();
      toast.success("Boost successfully");
    } catch (err) {
      console.log(err);
    }
    setIsBoosting(false);
  };

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
                label="Choose a protocol to boost with:"
                selectedProtocol={selectedProtocol}
                setSelectedProtocol={setSelectedProtocol}
                protocols={mockProtocols}
              />
              <div className="mb-1" />
            </ModalBody>

            <ModalFooter className="border-t flex flex-col justify-start">
              <p className="mb-0.5 text-gray-500">Amount to Stake:</p>
              <div className="flex items-center space-x-2 w-full">
                <div className="flex items-center space-x-3 w-full">
                  <Input
                    className="w-full"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    size={"lg"}
                    type="number"
                    placeholder="Enter amount to stake"
                  />
                  <Button
                    isLoading={isApproving}
                    onClick={handleApprove}
                    color="primary"
                  >
                    Approve
                  </Button>
                  <Button
                    isLoading={isBoosting}
                    onClick={handleBoost}
                    color="primary"
                  >
                    Boost
                  </Button>
                </div>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
