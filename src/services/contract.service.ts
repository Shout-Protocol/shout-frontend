import { ERC20_ABI } from "@/constants/abis/erc20.abi";
import { SHOUTER_ABI } from "@/constants/abis/shouter.abi";
import { ethers } from "ethers";

const tokenContract = (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider
) => {
  return new ethers.Contract(contractAddress, ERC20_ABI, provider);
};

const shouterContract = (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider
) => {
  return new ethers.Contract(contractAddress, SHOUTER_ABI, provider);
};

const contractSetvice = { tokenContract, shouterContract };
export default contractSetvice;
