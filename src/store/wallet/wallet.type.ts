import { create } from "zustand";
import { IWalletState, WalletType } from "./wallet.store";
import { createJSONStorage, persist } from "zustand/middleware";

export const useWalletStore = create(
  persist<IWalletState>(
    (set, get) => ({
      walletType: WalletType.none,
      walletAddress: "",
      currentChainId: "",
      setWalletType: (walletType: WalletType) => {
        set({ walletType });
      },
      setWalletAddress: (walletAddress: string) => {
        set({ walletAddress });
      },
      setCurrentChainId: (currentChainId: string) => {
        set({ currentChainId });
      },
    }),
    {
      name: "wallet-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
