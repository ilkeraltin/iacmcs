import React from 'react';
import { Box, Image, Heading } from 'grommet';

import { ComicInput } from '../API';

interface Image {
  imagePath: string;
  item: ComicInput;
  isLoading?: boolean;
}
const ImageViewer = ({ item, imagePath }: Image) => (
  <Box align="center" justify="center" pad="small" animation="fadeIn">
    <Heading data-testid="imageviewer__heading" level="3" margin="none">
      {item.title}
    </Heading>
    <Box
      align="center"
      justify="center"
      pad="medium"
      flex={true}
      height={{ min: '100px' }}>
      <Image
        data-testid="imageviewer__image"
        src={imagePath}
        alt={item?.alt || ''}
        fill={true}
      />
    </Box>
  </Box>
);

export default ImageViewer;
