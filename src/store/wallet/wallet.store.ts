export enum WalletType {
  metamask = "metamask",
  safe = "safe",
  cometh = "cometh",
  none = "none",
}

export interface IWalletState {
  walletType: WalletType;
  walletAddress: string;
  currentChain: string;

  setWalletType: (walletType: WalletType) => void;
  setWalletAddress: (walletAddress: string) => void;
}
