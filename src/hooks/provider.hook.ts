import { useWalletStore } from "@/store/wallet/wallet.type";
import { useCometh } from "./cometh.hook";
import { WalletType } from "@/store/wallet/wallet.store";
import { useMemo } from "react";
import { useMetaMask } from "./metamask.hook";

export const useProvider = () => {
  const { walletType } = useWalletStore();
  const {
    comethProvider,
    signOut: comethSignOut,
    instance: comethInfo,
  } = useCometh();
  const {
    provider: metaMaskProvider,
    disconnect: metaMaskDisconnect,
    connecting,
  } = useMetaMask();

  const set = useMemo(() => {
    switch (walletType) {
      case WalletType.cometh:
        return {
          provider: comethProvider,
          disconnect: comethSignOut,
        };
      case WalletType.metamask:
        return {
          provider: metaMaskProvider,
          disconnect: metaMaskDisconnect,
        };
      default:
        return { provider: null, disconnect: () => {} };
    }
  }, [comethProvider, comethSignOut, metaMaskDisconnect, metaMaskProvider, walletType]);

  return { ...set };
};