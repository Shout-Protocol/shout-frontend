import CreatePost from "@/components/CreatePost/CreatePost";
import PostFeed from "@/components/PostFeed/PostFeed";
import { useQuery } from "urql";
import { FeedQueryDocument } from "../../.graphclient";
import { pageConfig } from "@/configs/page.config";

export default function Test() {
  const [result, reexecuteQuery] = useQuery({
    query: FeedQueryDocument,
    variables: {
      first: pageConfig.pageSize,
      skip: 0,
      vault: '0'
    },
  });

  const { data, fetching, error } = result;

  console.log(data);

  return (
    <div>
      <p>Test page</p>
    </div>
  );
}
