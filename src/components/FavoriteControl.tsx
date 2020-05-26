import React, { memo } from 'react';
import { Box, Button } from 'grommet';
import { Favorite, Checkmark } from 'grommet-icons';

interface FavoriteControl {
  handleClick: () => void;
  isFavorited: boolean;
}

const FavoriteControl = ({ handleClick, isFavorited }: FavoriteControl) => (
  <Box
    align="center"
    justify="center"
    direction="row"
    gap="small"
    fill="horizontal"
    pad="medium">
    {isFavorited ? (
      <Button
        data-testid="favorite-control__favorited"
        label="Favorited"
        icon={<Checkmark />}
        primary={true}
        reverse={false}
        type="button"
        color="status-critical"
      />
    ) : (
      <Button
        data-testid="favorite-control__not-favorited"
        label="Add to Favorite"
        icon={<Favorite />}
        type="button"
        color="status-critical"
        onClick={handleClick}
      />
    )}
  </Box>
);

export default memo(FavoriteControl);
