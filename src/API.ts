/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFavoriteComicInput = {
  id?: string | null,
  comic?: ComicInput | null,
};

export type ComicInput = {
  id?: string | null,
  month?: string | null,
  num: number,
  link?: string | null,
  year?: string | null,
  news?: string | null,
  safe_title?: string | null,
  transcript?: string | null,
  alt?: string | null,
  img: string,
  title: string,
  day?: string | null,
};

export type ModelFavoriteComicConditionInput = {
  and?: Array< ModelFavoriteComicConditionInput | null > | null,
  or?: Array< ModelFavoriteComicConditionInput | null > | null,
  not?: ModelFavoriteComicConditionInput | null,
};

export type UpdateFavoriteComicInput = {
  id: string,
  comic?: ComicInput | null,
};

export type DeleteFavoriteComicInput = {
  id?: string | null,
};

export type ModelFavoriteComicFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelFavoriteComicFilterInput | null > | null,
  or?: Array< ModelFavoriteComicFilterInput | null > | null,
  not?: ModelFavoriteComicFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SearchableFavoriteComicFilterInput = {
  id?: SearchableIDFilterInput | null,
  and?: Array< SearchableFavoriteComicFilterInput | null > | null,
  or?: Array< SearchableFavoriteComicFilterInput | null > | null,
  not?: SearchableFavoriteComicFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
};

export type SearchableFavoriteComicSortInput = {
  field?: SearchableFavoriteComicSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableFavoriteComicSortableFields {
  id = "id",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type CreateFavoriteComicMutationVariables = {
  input: CreateFavoriteComicInput,
  condition?: ModelFavoriteComicConditionInput | null,
};

export type CreateFavoriteComicMutation = {
  createFavoriteComic:  {
    __typename: "FavoriteComic",
    id: string,
    comic:  {
      __typename: "Comic",
      id: string | null,
      month: string | null,
      num: number,
      link: string | null,
      year: string | null,
      news: string | null,
      safe_title: string | null,
      transcript: string | null,
      alt: string | null,
      img: string,
      title: string,
      day: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateFavoriteComicMutationVariables = {
  input: UpdateFavoriteComicInput,
  condition?: ModelFavoriteComicConditionInput | null,
};

export type UpdateFavoriteComicMutation = {
  updateFavoriteComic:  {
    __typename: "FavoriteComic",
    id: string,
    comic:  {
      __typename: "Comic",
      id: string | null,
      month: string | null,
      num: number,
      link: string | null,
      year: string | null,
      news: string | null,
      safe_title: string | null,
      transcript: string | null,
      alt: string | null,
      img: string,
      title: string,
      day: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteFavoriteComicMutationVariables = {
  input: DeleteFavoriteComicInput,
  condition?: ModelFavoriteComicConditionInput | null,
};

export type DeleteFavoriteComicMutation = {
  deleteFavoriteComic:  {
    __typename: "FavoriteComic",
    id: string,
    comic:  {
      __typename: "Comic",
      id: string | null,
      month: string | null,
      num: number,
      link: string | null,
      year: string | null,
      news: string | null,
      safe_title: string | null,
      transcript: string | null,
      alt: string | null,
      img: string,
      title: string,
      day: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetComicQueryVariables = {
  comicId?: number | null,
};

export type GetComicQuery = {
  getComic:  {
    __typename: "Comic",
    id: string | null,
    month: string | null,
    num: number,
    link: string | null,
    year: string | null,
    news: string | null,
    safe_title: string | null,
    transcript: string | null,
    alt: string | null,
    img: string,
    title: string,
    day: string | null,
  } | null,
};

export type GetFavoriteComicQueryVariables = {
  id: string,
};

export type GetFavoriteComicQuery = {
  getFavoriteComic:  {
    __typename: "FavoriteComic",
    id: string,
    comic:  {
      __typename: "Comic",
      id: string | null,
      month: string | null,
      num: number,
      link: string | null,
      year: string | null,
      news: string | null,
      safe_title: string | null,
      transcript: string | null,
      alt: string | null,
      img: string,
      title: string,
      day: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListFavoriteComicsQueryVariables = {
  filter?: ModelFavoriteComicFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFavoriteComicsQuery = {
  listFavoriteComics:  {
    __typename: "ModelFavoriteComicConnection",
    items:  Array< {
      __typename: "FavoriteComic",
      id: string,
      comic:  {
        __typename: "Comic",
        id: string | null,
        month: string | null,
        num: number,
        link: string | null,
        year: string | null,
        news: string | null,
        safe_title: string | null,
        transcript: string | null,
        alt: string | null,
        img: string,
        title: string,
        day: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchFavoriteComicsQueryVariables = {
  filter?: SearchableFavoriteComicFilterInput | null,
  sort?: SearchableFavoriteComicSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SearchFavoriteComicsQuery = {
  searchFavoriteComics:  {
    __typename: "SearchableFavoriteComicConnection",
    items:  Array< {
      __typename: "FavoriteComic",
      id: string,
      comic:  {
        __typename: "Comic",
        id: string | null,
        month: string | null,
        num: number,
        link: string | null,
        year: string | null,
        news: string | null,
        safe_title: string | null,
        transcript: string | null,
        alt: string | null,
        img: string,
        title: string,
        day: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type OnCreateFavoriteComicSubscriptionVariables = {
  owner: string,
};

export type OnCreateFavoriteComicSubscription = {
  onCreateFavoriteComic:  {
    __typename: "FavoriteComic",
    id: string,
    comic:  {
      __typename: "Comic",
      id: string | null,
      month: string | null,
      num: number,
      link: string | null,
      year: string | null,
      news: string | null,
      safe_title: string | null,
      transcript: string | null,
      alt: string | null,
      img: string,
      title: string,
      day: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateFavoriteComicSubscriptionVariables = {
  owner: string,
};

export type OnUpdateFavoriteComicSubscription = {
  onUpdateFavoriteComic:  {
    __typename: "FavoriteComic",
    id: string,
    comic:  {
      __typename: "Comic",
      id: string | null,
      month: string | null,
      num: number,
      link: string | null,
      year: string | null,
      news: string | null,
      safe_title: string | null,
      transcript: string | null,
      alt: string | null,
      img: string,
      title: string,
      day: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteFavoriteComicSubscriptionVariables = {
  owner: string,
};

export type OnDeleteFavoriteComicSubscription = {
  onDeleteFavoriteComic:  {
    __typename: "FavoriteComic",
    id: string,
    comic:  {
      __typename: "Comic",
      id: string | null,
      month: string | null,
      num: number,
      link: string | null,
      year: string | null,
      news: string | null,
      safe_title: string | null,
      transcript: string | null,
      alt: string | null,
      img: string,
      title: string,
      day: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
