import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FavoriteControl from '../components/FavoriteControl';

describe('<FavoriteControl />', () => {
  test('should display a Favorited state of a button', async () => {
    const { findByTestId } = render(
      <FavoriteControl isFavorited={true} handleClick={() => {}} />
    );
    const favorited = await findByTestId('favorite-control__favorited');
    expect(favorited).toBeInTheDocument();
  });
  test('should display a Add to Favorite state of a button', async () => {
    const { findByTestId } = render(
      <FavoriteControl isFavorited={false} handleClick={() => {}} />
    );
    const notFavorited = await findByTestId('favorite-control__not-favorited');
    expect(notFavorited).toBeInTheDocument();
  });
});
