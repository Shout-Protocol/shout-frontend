import { Database } from "@tableland/sdk";
import { getWalletClient } from "@wagmi/core";
import { getNetwork } from "@wagmi/core";

export const tablelandDatabaseConnection = async (chainId?: number) => {
  const { chain } = getNetwork();

  const walletClient = await getWalletClient({
    chainId: chainId ?? chain?.id ?? 1,
  });
  const db = new Database({ signer: walletClient as any });
  return db;
};
