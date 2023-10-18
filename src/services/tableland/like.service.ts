import { getLikePrefix } from "@/utils/tableland.util";
import { fetchAll } from "./read.service";
import { ILike } from "@/interfaces/tableland.interface";

export const fetchLikeFromPost = async (
  postId: string,
  tableId: string,
  chainId?: string
) => {
  return fetchAll<ILike[]>(`${getLikePrefix(postId)}_${chainId}_${tableId}`);
};
