/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideoClip = /* GraphQL */ `
  mutation CreateVideoClip(
    $input: CreateVideoClipInput!
    $condition: ModelVideoClipConditionInput
  ) {
    createVideoClip(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateVideoClip = /* GraphQL */ `
  mutation UpdateVideoClip(
    $input: UpdateVideoClipInput!
    $condition: ModelVideoClipConditionInput
  ) {
    updateVideoClip(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideoClip = /* GraphQL */ `
  mutation DeleteVideoClip(
    $input: DeleteVideoClipInput!
    $condition: ModelVideoClipConditionInput
  ) {
    deleteVideoClip(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
