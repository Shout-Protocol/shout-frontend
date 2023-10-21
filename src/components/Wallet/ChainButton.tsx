import { mappingChainInfo } from "@/configs/chain.config";
import { CHAINS } from "@/constants/chian.constant";
import { useWalletStore } from "@/store/wallet/wallet.type";
import { isContainObjectKey } from "@/utils/object.util";
import { Button } from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";

interface IChainButtonProps {
  onOpen: () => void;
}

export default function ChainButton({ onOpen }: IChainButtonProps) {
  const { currentChainId } = useWalletStore();
  const [client, setClient] = useState(false);

  useEffect(() => setClient(true), []);

  const chain = useMemo(() => {
    return mappingChainInfo(currentChainId);
  }, [currentChainId]);

  if (client) {
    return (
      <Button
        variant="bordered"
        className={`border-1 text-sm font-semibold ${
          isContainObjectKey(CHAINS, chain?.chainId) ? "text-black" : "text-red-500"
        }`}
        onPress={onOpen}
        // TODO: Add icon
        // startContent={<Image src={chain.iconPath} alt={chain.name} width={20} height={20} />}
      >
        {isContainObjectKey(CHAINS, chain?.chainId)
          ? chain?.name
          : "Wrong Network"}
      </Button>
    );
  }
}
