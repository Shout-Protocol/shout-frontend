import React, { useState } from "react";
import CreatePost from "../CreatePost/CreatePost";
import FeedPost from "./FeedPost";
import FeedSelector from "./FeedSelector";
import { FEED_TYPE_MENU } from "@/constants/menu";

export default function HomeFeed() {
  const [feedType, setFeedType] = useState<keyof typeof FEED_TYPE_MENU>("All");

  return (
    <div>
      <CreatePost />
      <FeedSelector
        selected={feedType}
        setSelected={setFeedType}
        feedType={Object.keys(FEED_TYPE_MENU)}
      />
      {[1, 2, 3].map((item) => (
        <FeedPost key={item} />
      ))}
    </div>
  );
}
