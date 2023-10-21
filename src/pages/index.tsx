import CreatePost from "@/components/CreatePost/CreatePost";
import PostFeed from "@/components/HomeFeed/PostFeed";

export default function Home() {
  return (
    <div>
      <CreatePost />
      <PostFeed />
    </div>
  );
}
