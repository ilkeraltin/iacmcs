import React, { memo } from 'react';
import { Box, InfiniteScroll, Image, Heading, Anchor } from 'grommet';
import { Favorite } from '../App';
import { ComicInput } from '../API';

interface InfiniteList {
  items: Array<Favorite>;
  handleItemClick: (a: ComicInput) => void;
  isImageList?: boolean;
}

const InfiniteList = ({
  items,
  handleItemClick,
  isImageList,
}: InfiniteList) => {
  const favItems = items.map((fav) => fav.comic);
  const onItemClick = (cmc: ComicInput) => {
    handleItemClick(cmc);
  };
  return (
    <>
      {isImageList ? (
        <InfiniteScroll items={favItems} replace={true}>
          {(item, index) => (
            <Box
              margin="small"
              background={{ color: 'white' }}
              key={item.safe_title + index}
              onClick={() => onItemClick(item)}
              flex={false}
              pad={{ horizontal: 'medium', bottom: 'medium' }}>
              <Heading level={3} margin="medium">
                {item.title}
              </Heading>
              <Image width="300" src={item.img} alt={item?.alt || ''} />
            </Box>
          )}
        </InfiniteScroll>
      ) : (
        <InfiniteScroll items={favItems} replace={true}>
          {(item, index) => (
            <Box
              margin="small"
              key={item.safe_title + index}
              width="300px"
              flex={false}>
              <Anchor label={item.title} onClick={() => onItemClick(item)} />
            </Box>
          )}
        </InfiniteScroll>
      )}
    </>
  );
};

export default memo(InfiniteList);
