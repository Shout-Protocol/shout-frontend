import { fetchCommentFromPost } from "@/services/tableland/comment.service";
import { fetchLikeFromPost } from "@/services/tableland/like.service";
import { fetch } from "@/services/tableland/read.service";

export default function TestTableland() {
  // fetch<{ B: number; id: number; }[]>("A_80001_1909", { id: "1" }, 80001).then((res) => console.log(res));
  // fetchCommentFromPost(postId, tableId).then((res) => console.log(res));
  // fetchLikeFromPost(postId, tableId).then((res) => console.log(res));
  return (
    <div>
      <h1>Test Tableland</h1>
    </div>
  );
}
