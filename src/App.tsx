import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { API, graphqlOperation, Auth, Cache } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import { Grommet, Box, Main } from 'grommet';
import { listFavoriteComics, getComicBasic } from './graphql/queries';
import { createFavoriteComic } from './graphql/mutations';
import { onCreateFavoriteComic } from './graphql/subscriptions';
import * as APITypes from './API';
import { Observable } from './../node_modules/zen-observable-ts';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ImageControlGroup from './components/ImageControlGroup';
import FavoriteControl from './components/FavoriteControl';
import Sidebar from './components/Sidebar';
import Loading from './components/Loading';
import Error from './components/Error';

import { getCDNImagePath } from './Utils';
const ImageViewer = lazy(() => import('./components/ImageViewer'));

const theme = {
  global: {
    colors: {
      background: {
        light: '#ffffff',
        dark: '#000000',
      },
    },
  },
};
interface UserAttributes {
  sub: string;
  email: string;
  email_verified: string;
  phone_number: string;
  phone_number_verified: string;
}

interface User {
  id: string;
  username: string;
  attributes: UserAttributes;
}

export interface Favorite {
  comic: APITypes.ComicInput;
  createdAt: string;
  id: string;
  owner: string;
  updatedAt: string;
}

function App() {
  const [comic, setComic] = useState<APITypes.ComicInput | undefined>(
    undefined
  );
  const [lastComicId, setLastComicId] = useState<number | undefined>(undefined);
  const [user, setUser] = useState<string | undefined>(undefined);
  const [favorited, setFavorited] = useState<boolean>(false);
  const [favoritesNextToken, setFavoritesNextToken] = useState<string>('');
  const [favorites, setFavorites] = useState<Array<Favorite> | undefined>(
    undefined
  );
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>();
  const [simulationInterval, setSimulationInterval] = useState<string>('5');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showFavorites, setShowFavorites] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchComic = async (newComicId: number = 0) => {
    setIsLoading(true);
    const comicFromCache = Cache.getItem(`${newComicId}`);
    if (comicFromCache) {
      setComic(comicFromCache);
      setIsLoading(false);
    } else {
      try {
        setError(false);
        const result = (await API.graphql(
          graphqlOperation(getComicBasic, { comicId: newComicId })
        )) as {
          data: { getComic: APITypes.ComicInput };
        };
        const { getComic: comicFromApi } = result.data;
        Cache.setItem(`${comicFromApi.num}`, comicFromApi);
        setComic(comicFromApi);
        setIsLoading(false);
        return result.data.getComic;
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
  };

  const updateCurrentComic = (newComic: APITypes.ComicInput) => {
    setComic(newComic);
  };

  const getPrevComic = () => {
    if (comic?.num === 1) return null;
    const prevComicId = comic?.num && comic?.num - 1;
    fetchComic(prevComicId);
  };

  const getNextComic = () => {
    if (comic?.num === lastComicId) return null;
    const nextComicId = comic?.num && comic?.num + 1;
    fetchComic(nextComicId);
  };

  const getRandomComic = async () => {
    const currentMax = comic?.num;
    if (!currentMax) return null;
    const randomComicId: number = Math.floor(
      Math.random() * Math.floor(currentMax)
    );
    const newRandomComic = fetchComic(randomComicId);
    return newRandomComic;
  };

  const getFavoriteStatus = useCallback(
    async (comicId?: number) => {
      if (!favorites) {
        const listOfFavoriteComics = await fetchFavorites();
        return listOfFavoriteComics.data.listFavoriteComics.items.some(
          (item) => item.comic?.num === comicId
        );
      } else {
        return favorites.some((item) => item.comic?.num === comicId);
      }
    },
    [favorites]
  );

  const fetchFavorites = async (nextToken?: string) => {
    const favorites = (await API.graphql(
      graphqlOperation(listFavoriteComics, { nextToken })
    )) as {
      data: {
        listFavoriteComics: { items: [Favorite]; nextToken?: string };
      };
    };
    if (favorites.data.listFavoriteComics.nextToken) {
      setFavoritesNextToken(favorites.data.listFavoriteComics.nextToken);
    }
    setFavorites(favorites.data.listFavoriteComics.items);
    return favorites;
  };

  const addToFavorite = async (comicToFav: APITypes.ComicInput) => {
    const isItemExist = favorites?.filter(
      (fav) => fav.comic.num === comicToFav.num
    );
    if (!comicToFav || (isItemExist && isItemExist.length > 0)) return;
    try {
      setFavorited(true);
      const result = await API.graphql(
        graphqlOperation(createFavoriteComic, { input: { comic: comicToFav } })
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSidebar = (status?: boolean) => {
    if (status) {
      setShowFavorites(status);
    } else {
      setShowFavorites(!showFavorites);
    }
  };

  const simulateFavorite = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      return null;
    }
    const delay: number = parseInt(simulationInterval) * 1000;
    const newIntervalId = setInterval(() => {
      getRandomComic().then((newComic) => {
        if (newComic) {
          addToFavorite(newComic);
        }
      });
    }, delay);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    const getLatestComic = async () => {
      const res = await fetchComic();
      setLastComicId(res?.num);
      return res;
    };

    const getUserInfo = async () => {
      const userInfo: User = await Auth.currentAuthenticatedUser();
      setUser(userInfo.username);
    };

    getUserInfo();
    getLatestComic();
    return () => {
      Cache.clear();
    };
  }, []);

  useEffect(() => {
    setFavorited(false);
    const setFavoriteStatus = async () => {
      const isFavorited = await getFavoriteStatus(comic?.num);
      setFavorited(isFavorited);
    };

    setFavoriteStatus();
  }, [comic, getFavoriteStatus]);

  useEffect(() => {
    const createFavoriteQuery = API.graphql(
      graphqlOperation(onCreateFavoriteComic, { owner: user })
    ) as Observable<object>;
    const subscription = createFavoriteQuery.subscribe({
      next: (result: {
        value: {
          data: {
            onCreateFavoriteComic: Favorite;
          };
        };
      }) => {
        const newFavorite = result.value.data.onCreateFavoriteComic;
        if (favorites !== undefined) {
          const newFavoriteList = [newFavorite, ...favorites];
          setFavorites(newFavoriteList);
        }
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [favorites, user]);

  return (
    <Grommet full theme={theme}>
      {favorites && (
        <Sidebar
          isOpen={showFavorites}
          handleCloseClick={toggleSidebar}
          favorites={favorites}
          handleItemClick={updateCurrentComic}
        />
      )}
      <Box fill="vertical" overflow="auto" align="center" flex="grow">
        <AppHeader
          favoriteItemsCount={favorites?.length || 0}
          handleFavoritesClick={toggleSidebar}
        />
        <Main
          fill="horizontal"
          flex="grow"
          overflow="auto"
          margin={{ left: 'xlarge', right: 'xlarge' }}>
          <ImageControlGroup
            handleNext={getNextComic}
            handlePrev={getPrevComic}
            handleRandom={getRandomComic}
            isNextDisabled={comic?.num === lastComicId}
            isPrevDisabled={comic?.num === 1}
            handleSimulationClick={simulateFavorite}
            isSimulationActive={intervalId ? true : false}
            handleRangeChange={setSimulationInterval}
            currentInterval={simulationInterval}
          />
          {comic ? (
            <>
              <Suspense fallback={<Loading />}>
                <ImageViewer
                  item={comic}
                  imagePath={getCDNImagePath(comic.img)}
                  isLoading={isLoading}
                />
              </Suspense>

              {!isLoading && (
                <FavoriteControl
                  handleClick={() => addToFavorite(comic)}
                  isFavorited={favorited}
                />
              )}
            </>
          ) : null}
          {error ? <Error /> : null}
        </Main>
        <AppFooter />
      </Box>
    </Grommet>
  );
}

export default withAuthenticator(App);
