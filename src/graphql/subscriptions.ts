/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFavoriteComic = /* GraphQL */ `
  subscription OnCreateFavoriteComic($owner: String!) {
    onCreateFavoriteComic(owner: $owner) {
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
export const onUpdateFavoriteComic = /* GraphQL */ `
  subscription OnUpdateFavoriteComic($owner: String!) {
    onUpdateFavoriteComic(owner: $owner) {
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
export const onDeleteFavoriteComic = /* GraphQL */ `
  subscription OnDeleteFavoriteComic($owner: String!) {
    onDeleteFavoriteComic(owner: $owner) {
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
