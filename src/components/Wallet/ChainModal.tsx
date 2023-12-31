import { mappingChainInfo } from "@/configs/chain.config";
import { CHAINS } from "@/constants/chian.constant";
import { useMetaMask } from "@/hooks/metamask.hook";
import { WalletType } from "@/store/wallet/wallet.type";
import { useWalletStore } from "@/store/wallet/wallet.store";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

interface IChainModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export const ChainModal = ({ isOpen, onOpenChange }: IChainModalProps) => {
  const { walletType, currentChainId } = useWalletStore();
  const { changeChain } = useMetaMask();

  const chainFilter = useMemo(() => {
    if (walletType === WalletType.cometh) {
      return [mappingChainInfo(currentChainId)];
    }
    return Object.values(CHAINS);
  }, [currentChainId, walletType]);

  const chainItemRender = useCallback(
    (onClose: () => void) => {
      return chainFilter.map((chain) => {
        return (
          <Button
            key={chain.chainId}
            className={`flex justify-between items-center space-x-3 py-6 rounded-md ${
              chain.chainId === currentChainId
                ? "bg-fuchsia-400 text-white"
                : "bg-white hover:bg-slate-100"
            }`}
            disabled={chain.chainId === currentChainId}
            onPress={async () => {
              await changeChain(chain.chainId);
              onClose();
            }}
          >
            <div className="flex space-x-3 items-center">
              <Image
                src={chain.iconPath}
                alt={chain.chainName}
                width={30}
                height={30}
              />
              <p className="font-semibold">{chain.chainName}</p>
            </div>
            {chain.chainId === currentChainId && <div>Connected</div>}
          </Button>
        );
      });
    },
    [chainFilter, changeChain, currentChainId]
  );

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
      <ModalContent className="p-3">
        {(onClose) => (
          <>
            <ModalHeader className="flex items-center space-x-3">
              Switch Networks
            </ModalHeader>
            <ModalBody>
              <>{chainItemRender(onClose)}</>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
