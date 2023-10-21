import { CHAINS } from "@/constants/chian.constant";

interface Chain {
  name: string;
  chainId: string;
  iconPath: string;
}

interface ChainMap {
  [key: string]: Chain;
}

export const mappingChainInfo = (chainId: string) => {
  const chains: ChainMap = CHAINS;
  return chains[chainId];
};
