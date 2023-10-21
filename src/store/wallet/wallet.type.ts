export enum WalletType {
  metamask = "metamask",
  safe = "safe",
  cometh = "cometh",
  none = "none",
}

export interface IWalletState {
  walletType: WalletType;
  walletAddress: string;
  currentChainId: string;

  setWalletType: (walletType: WalletType) => void;
  setWalletAddress: (walletAddress: string) => void;
  setCurrentChainId: (currentChain: string) => void;
}
