export const filterHelper = (filters: Record<string, string>) => {
  return Object.entries(filters).reduce((acc, cur) => {
    if (acc.length === 0) {
      return `${cur[0]} = ${cur[1]}`;
    }
    return `AND ${cur[0]} = ${cur[1]}`;
  }, "");
};

export const getCommentPrefix = (postId: string) => `comment_${postId}`;

export const getLikePrefix = (postId: string) => `like_${postId}`;
