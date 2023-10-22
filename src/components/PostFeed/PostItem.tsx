import {
  HeartIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/outline";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import BoostPost from "../BoostPost/BoostPost";
import WithdrawBoost from "../BoostPost/WithdrawBoost";
import { Profile } from "../../../types/shoutGQL";
import axios from "axios";
import { truncateAddress } from "@/utils/formatString";
import { useRouter } from "next/router";
import { useWalletStore } from "@/store/wallet/wallet.store";
import { FeedQueryQuery } from "../../../.graphclient";
import { useQuery } from "urql";
import { useQuery as useApolloQuery } from "@apollo/client";
import { GET_USER } from "@/gql/user.query";

const DEFAULT_IMG_URL =
  "https://res.cloudinary.com/daily-now/image/upload/f_auto/v1/placeholders/3";

export default function PostItem({
  data,
  hideHeader = false,
}: {
  data: FeedQueryQuery["postBoosts"][0];
  hideHeader?: boolean;
}) {
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMG_URL);
  const [description, setDescription] = useState("");
  const router = useRouter();
  const { ownerId } = useWalletStore();

  const { loading, data: User } = useApolloQuery<{ profile: Profile }>(
    GET_USER,
    {
      variables: { walletAddress: data.post.owner?.id },
    }
  );

  const user = User?.profile;

  console.log(data.post.owner?.id);
  console.log(User);

  const getData = useCallback(async () => {
    try {
      const metadata: {
        name: string;
        description: string;
        image: string;
      } = await axios
        .get(`https://${data.post.ipfsHash}.ipfs.dweb.link/metadata.json`)
        .then((res) => res.data);
      console.log(metadata.image);
      if (metadata.image) {
        setImageUrl(metadata.image.replace("ipfs://", "https://ipfs.io/ipfs/"));
        setDescription(metadata.description);
      }
    } catch (e) {
      setImageUrl(DEFAULT_IMG_URL);
      console.error("Error fetch nft data", e);
    }
  }, [data.post.ipfsHash]);

  React.useEffect(() => {
    getData();
  }, [getData]);

  if (loading) return;
  return (
    <>
      <div className="p-3 pt-0.5">
        {hideHeader ? null : (
          <div className="flex items-center mb-2">
            <Avatar
              onClick={() => router.push(`/profile/${data.post.owner?.id}`)}
              className="mr-2 text-white bg-gray-300 w-10 h-10 cursor-pointer"
            />
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="text-gray-500">1h</p>
                <p
                  onClick={() => router.push(`/profile/${data.post.owner?.id}`)}
                  className="text-gray-500 ml-2  cursor-pointer"
                >
                  @{user?.name}
                </p>
              </div>
              <h1 className="font-semibold text-md">
                {truncateAddress(data.post.owner?.id as string)}
              </h1>
            </div>
          </div>
        )}
        <p className="-mt-1 mb-1">{description}</p>
        <div className="w-full h- relative">
          <Image
            src={imageUrl}
            width={700}
            height={300}
            objectFit="cover"
            alt="post-img"
            className="rounded-md"
          />
        </div>
        <div className="w-full flex items-center justify-between mt-2">
          <div className="flex items-center">
            <HeartIcon className="w-7" />
            <p>0</p>
            <ChatBubbleBottomCenterIcon className="w-7 ml-3" />
            <p>0</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xs text-gray-500 bg-gray-100 p-[7.5px] rounded">
              FileCoin : 0
            </p>
            <p className="text-xs text-gray-500 bg-gray-100 p-[7.5px] rounded">
              Spark : 0
            </p>
            {user?._id === ownerId && (
              <div className="flex items-center space-x-1.5">
                <WithdrawBoost />
                <BoostPost ipfsHash={data.post.ipfsHash} />
              </div>
            )}
          </div>
        </div>
        <hr className="mt-2" />
      </div>
    </>
  );
}
