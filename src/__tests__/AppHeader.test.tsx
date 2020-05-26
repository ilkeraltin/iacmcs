import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AppHeader from '../components/AppHeader';

describe('<AppHeader />', () => {
  test('should display a favorites and logout links at the header', async () => {
    const { findByTestId } = render(
      <AppHeader favoriteItemsCount={99} handleFavoritesClick={() => {}} />
    );
    const headerLogoutLink = await findByTestId('app-header__logout');
    const headerFavoritesLink = await findByTestId('app-header__favorites');
    expect(headerLogoutLink).toBeInTheDocument();
    expect(headerFavoritesLink).toBeInTheDocument();
    expect(headerFavoritesLink).toContainHTML('(99)');
  });
});
