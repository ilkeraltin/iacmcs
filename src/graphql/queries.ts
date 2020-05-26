/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComicBasic = /* GraphQL */ `
  query GetComic($comicId: Int) {
    getComic(comicId: $comicId) {
      num
      safe_title
      alt
      img
      title
    }
  }
`;

export const getComic = /* GraphQL */ `
  query GetComic($comicId: Int) {
    getComic(comicId: $comicId) {
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
  }
`;
export const getFavoriteComic = /* GraphQL */ `
  query GetFavoriteComic($id: ID!) {
    getFavoriteComic(id: $id) {
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
export const listFavoriteComics = /* GraphQL */ `
  query ListFavoriteComics(
    $filter: ModelFavoriteComicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFavoriteComics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const searchFavoriteComics = /* GraphQL */ `
  query SearchFavoriteComics(
    $filter: SearchableFavoriteComicFilterInput
    $sort: SearchableFavoriteComicSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchFavoriteComics(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
