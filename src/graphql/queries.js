/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideoClip = /* GraphQL */ `
  query GetVideoClip($id: ID!) {
    getVideoClip(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listVideoClips = /* GraphQL */ `
  query ListVideoClips(
    $filter: ModelVideoClipFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoClips(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
