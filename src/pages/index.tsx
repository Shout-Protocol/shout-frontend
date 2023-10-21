import CreatePost from "@/components/CreatePost/CreatePost";
import PostFeed from "@/components/HomeFeed/PostFeed";
import { useQuery } from "@apollo/client";
import { GET_POSTS } from "@/gql/post.query";
import { Post } from "../../types/shoutGQL";

export default function Home() {
  const { loading, error, data } = useQuery<{ posts: Post[] }>(GET_POSTS);

  return (
    <div>
      <CreatePost />
      <PostFeed />
    </div>
  );
}
