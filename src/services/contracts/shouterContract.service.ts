import { SHOUTER_ABI } from "@/constants/abis/shouter.abi";
import { CONTRACT_ADDRESS } from "@/constants/address.constant";
import { ethers } from "ethers";

const shouterContract = (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider
) => {
  return new ethers.Contract(contractAddress, SHOUTER_ABI, provider);
};

const createAndBoostPost = async (
  contractAddress: string,
  provider: ethers.Signer | ethers.providers.Provider,
  _ipfsHash: string,
  _yieldVaultId: number | ethers.BigNumber,
  _amount: number | ethers.BigNumber
) => {
  const contract = shouterContract(CONTRACT_ADDRESS["0x5"].Shouter, provider);
  const tx = await contract.createAndBoostPost(
    _ipfsHash,
    _yieldVaultId,
    _amount
  );
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
