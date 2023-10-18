import { getCommentPrefix } from "@/utils/tableland.util";
import { fetchAll, fetch } from "./read.service";
import { IComment } from "@/interfaces/tableland.interface";

export const fetchCommentFromPost = async (
  postId: string,
  tableId: string,
  chainId?: string,
) => {
  return fetchAll<IComment[]>(`${getCommentPrefix(postId)}_${chainId}_${tableId}`);
};

export const fetchCommentFromPostByCommentId = async (
  postId: string,
  tableId: string,
  commentId: string,
  chainId?: string,
) => {
  const filters = { i: commentId }
  return fetch<IComment[]>(`${getCommentPrefix(postId)}_${chainId}_${tableId}`, filters);
};
