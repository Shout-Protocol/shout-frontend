import { ERC20_ABI } from "@/constants/abis/erc20.abi";
import { ethers } from "ethers";

const shouterContract = (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider
) => {
  return new ethers.Contract(contractAddress, ERC20_ABI, provider);
};

const createAndBoostPost = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  _ipfsHash: string,
  _yieldVaultId: number,
  _amount: number
) => {
  const contract = shouterContract(contractAddress, provider);
  const tx = await contract.createAndBoostPost();
  await tx.wait();
  return tx;
};

const depositBoost = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  _postId: number,
  _yieldVaultId: number,
  _amount: number
) => {
  const contract = shouterContract(contractAddress, provider);
  const tx = await contract.depositBoost(_postId, _yieldVaultId, _amount);
  await tx.wait();
};

const withdrawBoost = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  _postId: number,
  _yieldVaultId: number,
  _amount: number
) => {
  const contract = shouterContract(contractAddress, provider);
  const tx = await contract.withdrawBoost(_postId, _yieldVaultId, _amount);
  await tx.wait();
};

const shouterContractService = {
  shouterContract,
  createAndBoostPost,
  depositBoost,
  withdrawBoost,
};
export default shouterContractService;
