import { gql } from "@apollo/client";

export const GET_POSTS = gql(`
  query Posts {
    posts {
      _id
      ipfsHash
      ownerId
      likeId
      owner {
        _id
        walletAddress
        name
        avatar
        bio
      }
      like {
        _id
      }
      comment {
        _id
        message
        postId
        owner {
          _id
          walletAddress
          name
          avatar
        }
      }
    }
  }
`);
