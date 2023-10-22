import { useRouter } from "next/router";
import { Avatar } from "@nextui-org/react";
import { truncateAddress } from "@/utils/formatString";
import PostItem from "@/components/PostFeed/PostItem";
import LoginNotice from "@/components/LoginNotice";

export default function Profile() {
  const router = useRouter();
  const walletAddr = router.query.address;

  if (!walletAddr || walletAddr === "0x")
    return (
      <div className="pt-3 px-4">
        <LoginNotice />
      </div>
    );

  return (
    <>
      <div className="flex py-7 px-10 items-center border-b">
        <Avatar name="ST" className="w-[120px] h-[120px]" />
        <div className="ml-10">
          <p className="text-xl font-semibold text-gray-600">@satosheep</p>
          <p className="text-gray-400">
            {truncateAddress(walletAddr as string)}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <PostItem />
      </div>
    </>
  );
}
