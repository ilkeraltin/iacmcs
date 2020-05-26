import React, { Suspense, memo } from 'react';
import { Box, Layer, Heading } from 'grommet';
import { Favorite } from '../App';
import { ComicInput } from '../API';
import Loading from './Loading';

const InfiniteList = React.lazy(() => import('./InfiniteList'));

interface Sidebar {
  isOpen: boolean;
  handleCloseClick: (a: boolean) => void;
  handleItemClick: (a: ComicInput) => void;
  favorites: Array<Favorite>;
}

const Sidebar = ({
  isOpen,
  handleCloseClick,
  favorites,
  handleItemClick,
}: Sidebar) => {
  const onItemClick = (cmc: ComicInput) => {
    handleCloseClick(false);
    handleItemClick(cmc);
  };
  return (
    <>
      {isOpen ? (
        <Layer
          full="vertical"
          position="right"
          onEsc={() => handleCloseClick(false)}
          onClickOutside={() => handleCloseClick(false)}>
          <Box
            fill
            style={{ maxWidth: '400px' }}
            align="start"
            justify="start"
            pad="small"
            background={{ color: 'selected-background' }}
            overflow="scroll">
            <Heading level={2} margin="medium" color="white">
              My Favorite Comics
            </Heading>
            <Suspense fallback={<Loading />}>
              <InfiniteList items={favorites} handleItemClick={onItemClick} />
            </Suspense>
          </Box>
        </Layer>
      ) : null}
    </>
  );
};

export default memo(Sidebar);
