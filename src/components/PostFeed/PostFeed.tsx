import React, { useState } from "react";
import PostItem from "./PostItem";
import FeedSelector from "./FeedSelector";
import { FEED_TYPE_MENU } from "@/constants/menu";

export default function PostFeed() {
  const [feedType, setFeedType] = useState<keyof typeof FEED_TYPE_MENU>("All");

  return (
    <div>
      <FeedSelector
        selected={feedType}
        setSelected={setFeedType}
        feedType={Object.keys(FEED_TYPE_MENU)}
      />
      {[1, 2, 3].map((item) => (
        <PostItem key={item} />
      ))}
    </div>
  );
}
