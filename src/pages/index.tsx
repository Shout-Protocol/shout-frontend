import CreatePost from "@/components/CreatePost/CreatePost";
import PostFeed from "@/components/PostFeed/PostFeed";

export default function Home() {
  return (
    <div>
      <CreatePost />
      <PostFeed />
    </div>
  );
}
