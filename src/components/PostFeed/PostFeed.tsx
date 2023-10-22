import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import FeedSelector from "./FeedSelector";
import { FEED_TYPE_MENU } from "@/constants/menu";
import { useQuery } from "@apollo/client";
import { useQuery as useQueryUrql, useSubscription } from "urql";

import { GET_POSTS } from "@/gql/post.query";
import { Post } from "../../../types/shoutGQL";
import { Spinner } from "@nextui-org/react";
import { FeedQueryDocument } from "../../../.graphclient";
import { pageConfig } from "@/configs/page.config";

const reverseFeed = (array: any[]) => {
  let newArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};

export default function PostFeed() {
  const [feedType, setFeedType] = useState<keyof typeof FEED_TYPE_MENU>("All");
  const { loading, error, data } = useQuery<{ posts: Post[] }>(GET_POSTS, {
    pollInterval: 1500,
  });

  const [result, executeQuery] = useQueryUrql({
    query: FeedQueryDocument,
    variables: {
      first: pageConfig.pageSize,
      skip: 0,
      vault: FEED_TYPE_MENU[feedType],
    },
  });
  const {
    data: dataSubgraph,
    fetching: fetchingSubgraph,
    error: errorSubgraph,
  } = result;

  useEffect(() => {
    executeQuery();
  }, [feedType, executeQuery]);
  if (loading || fetchingSubgraph || dataSubgraph === undefined)
    return (
      <div className="flex w-full items-center justify-center h-[200px] ">
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
      {/* {data?.posts.map((item) => (
        <PostItem key={item._id} data={item} />
      ))} */}
      {dataSubgraph?.postBoosts.map((item) => (
        <PostItem key={item.id} data={item} />
      ))}
    </div>
  );
}
