import { WalletType } from "@/store/wallet/wallet.store";
import { useWalletStore } from "@/store/wallet/wallet.type";
import { useSDK } from "@metamask/sdk-react";
import { ethers } from "ethers";
import { useEffect, useMemo, useState } from "react";

export const useMetaMask = () => {
  const { sdk, connected, connecting, provider: publicProvider } = useSDK();
  const { setWalletAddress, setWalletType, setCurrentChainId, walletType } =
    useWalletStore();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [chainId, setChainId] = useState<string>();

  const connect = async () => {
    try {
      const accounts = (await sdk?.connect()) as string[];
      if (accounts && accounts.length > 0) {
        setWalletType(WalletType.metamask);
        setWalletAddress(accounts[0]);
      } else {
        console.warn("No accounts found");
      }
    } catch (e) {
      console.warn("Failed to connect:", e);
    }
  };

  const disconnect = async () => {
    try {
      sdk?.terminate();
      // setProvider(undefined);
      setWalletType(WalletType.none);
      setWalletAddress("");
      setCurrentChainId("");
    } catch (e) {
      console.warn("Failed to disconnect:", e);
    }
  };

  const changeChain = async (chainId: string) => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId }],
        });
      }
    } catch (e) {
      console.warn("Failed to change chain:", e);
    }
  };

  useEffect(() => {
    if (window.ethereum && walletType === WalletType.metamask) {
      const chainId = window.ethereum.chainId;
      setChainId(chainId || "");
      setCurrentChainId(chainId || "");
    }
    if (publicProvider) {
      const _provider = new ethers.providers.Web3Provider(
        publicProvider as any
      );
      setProvider(_provider);
    }
  }, [publicProvider, connected, setCurrentChainId, walletType]);

  return {
    connect,
    disconnect,
    changeChain,
    connecting,
    connected,
    provider,
    chainId,
  };
};
