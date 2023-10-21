import { useWalletStore } from "@/store/wallet/wallet.type";
import { useCometh } from "./cometh.hook";
import { WalletType } from "@/store/wallet/wallet.store";
import { useMemo } from "react";

export const useProvider = () => {
  const { walletType } = useWalletStore();
  const { comethProvider, signOut, instance: comethInfo } = useCometh();
  // metamask provider

  const set = useMemo(() => {
    switch (walletType) {
      case WalletType.cometh:
        return { provider: comethProvider, disconnect: signOut };
      // case WalletType.metamask:
      //   return {};
      default:
        return { provider: null, disconnect: () => {} };
    }
  }, [comethProvider, signOut, walletType]);

  return { ...set };
};
