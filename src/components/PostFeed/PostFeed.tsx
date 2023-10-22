import React, { useState } from "react";
import PostItem from "./PostItem";
import FeedSelector from "./FeedSelector";
import { FEED_TYPE_MENU } from "@/constants/menu";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/gql/post.query";
import { Post } from "../../../types/shoutGQL";
import { Spinner } from "@nextui-org/react";

export default function PostFeed() {
  const [feedType, setFeedType] = useState<keyof typeof FEED_TYPE_MENU>("All");
  const { loading, error, data } = useQuery<{ posts: Post[] }>(GET_POSTS);

  if (loading)
    return (
      <div className="flex w-full items-center justify-center h-[200px]">
        <Spinner />
      </div>
    );

  return (
    <div>
      <FeedSelector
        selected={feedType}
        setSelected={setFeedType}
        feedType={Object.keys(FEED_TYPE_MENU)}
      />
      {data?.posts.map((item) => (
        <PostItem key={item._id} data={item} />
      ))}
    </div>
  );
}
