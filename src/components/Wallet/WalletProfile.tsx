import { MappingWalletIconPath } from "@/configs/wallet.config";
import { useCometh } from "@/hooks/cometh.hook";
import { useWalletStore } from "@/store/wallet/wallet.type";
import { truncateAddress } from "@/utils/formatString";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function WalletProfile() {
  const { walletAddress, walletType } = useWalletStore();
  const { signOut } = useCometh();
  const [isClient, setIsClient] = useState(false);

  const handleSignOut = () => signOut();

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient)
    return (
      <Dropdown>
        <DropdownTrigger>
          <div className="flex cursor-pointer">
            <div className="flex border border-[#EFEFEF] rounded-xl bg-[#F7F9F9]">
              <div className="p-3 flex items-center space-x-2">
                <Image
                  src={MappingWalletIconPath(walletType)}
                  alt="safe"
                  width={20}
                  height={20}
                />
                <p className="text-xs font-semibold">0.123456</p>
              </div>
              <div className="bg-white border boder-[#EFEFEF] rounded-xl p-3 flex items-center">
                <p className="text-xs font-semibold">
                  {truncateAddress(walletAddress)}
                </p>
              </div>
            </div>
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Action">
          <DropdownItem
            key="sign_out"
            className="text-danger"
            color="danger"
            onPress={() => handleSignOut()}
          >
            Disconnect
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
}
