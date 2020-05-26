/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFavoriteComic = /* GraphQL */ `
  mutation CreateFavoriteComic(
    $input: CreateFavoriteComicInput!
    $condition: ModelFavoriteComicConditionInput
  ) {
    createFavoriteComic(input: $input, condition: $condition) {
      id
      comic {
        id
        month
        num
        link
        year
        news
        safe_title
        transcript
        alt
        img
        title
        day
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateFavoriteComic = /* GraphQL */ `
  mutation UpdateFavoriteComic(
    $input: UpdateFavoriteComicInput!
    $condition: ModelFavoriteComicConditionInput
  ) {
    updateFavoriteComic(input: $input, condition: $condition) {
      id
      comic {
        id
        month
        num
        link
        year
        news
        safe_title
        transcript
        alt
        img
        title
        day
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteFavoriteComic = /* GraphQL */ `
  mutation DeleteFavoriteComic(
    $input: DeleteFavoriteComicInput!
    $condition: ModelFavoriteComicConditionInput
  ) {
    deleteFavoriteComic(input: $input, condition: $condition) {
      id
      comic {
        id
        month
        num
        link
        year
        news
        safe_title
        transcript
        alt
        img
        title
        day
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
