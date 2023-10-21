import { useDisclosure } from "@nextui-org/react";
import WalletButton from "./WalletButton";
import WalletModal from "./WalletModal";
import { useWalletStore } from "@/store/wallet/wallet.type";
import { WalletType } from "@/store/wallet/wallet.store";
import { useEffect, useState } from "react";
import WalletProfile from "./WalletProfile";

export default function WalletConnect() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { walletAddress, walletType } = useWalletStore();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (
    domLoaded &&
    (walletAddress.length <= 0 || walletType === WalletType.none)
  )
    return (
      <>
        <WalletButton onOpen={onOpen} />
        <WalletModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </>
    );
  return <WalletProfile />;
}
