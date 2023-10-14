import React from "react";
import CreatePost from "../CreatePost/CreatePost";
import FeedPost from "./FeedPost";

export default function HomeFeed() {
  return (
    <div>
      <CreatePost />
      {[1, 2, 3].map((item) => (
        <FeedPost key={item} />
      ))}
    </div>
  );
}
