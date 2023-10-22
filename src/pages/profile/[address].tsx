import { useRouter } from "next/router";
import { Avatar, Spinner } from "@nextui-org/react";
import { truncateAddress } from "@/utils/formatString";
import LoginNotice from "@/components/LoginNotice";
import { useQuery } from "@apollo/client";
import { Profile } from "../../../types/shoutGQL";
import { GET_USER } from "@/gql/user.query";
import PostItem from "@/components/PostFeed/PostItem";
import { Post } from "../../../.graphclient";

export default function Profile() {
  const router = useRouter();
  const walletAddr = router.query.address;

  const { loading, data } = useQuery<{ profile: Profile }>(GET_USER, {
    variables: { walletAddress: walletAddr },
  });

  if (!walletAddr || walletAddr === "0x")
    return (
      <div className="pt-3 px-4">
        <LoginNotice />
      </div>
    );

  if (loading)
    return (
      <div className="w-full flex justify-center items-center h-[200px]">
        <Spinner />
      </div>
    );

  console.log(data?.profile.post);

  return (
    <>
      <div className="flex py-7 px-10 items-center border-b">
        <Avatar className="text-white bg-gray-300 w-[120px] h-[120px]" />
        <div className="ml-10">
          <p className="text-xl font-semibold text-gray-600">
            @{data?.profile.name}
          </p>
          <p className="text-gray-400">
            {truncateAddress(data?.profile.walletAddress as string)}
          </p>
        </div>
      </div>
      <div className="mt-3">
        {/* {FIXME:data can't be use properly.} */}
        {/* {data?.profile.post?.map((item) => (
          <PostItem key={item!._id} data={item!} />
        ))} */}
      </div>
    </>
  );
}
