import React, { memo } from 'react';
import {
  Box,
  Header,
  Nav,
  Heading,
  Anchor,
  Menu,
  ResponsiveContext,
} from 'grommet';
import { Emoji, Logout, Favorite } from 'grommet-icons';
import { Auth } from 'aws-amplify';

interface AppHeader {
  favoriteItemsCount: number;
  handleFavoritesClick: () => void;
}

const AppHeader = ({ favoriteItemsCount, handleFavoritesClick }: AppHeader) => {
  const screenSize: boolean = React.useContext(ResponsiveContext) === 'small';
  return (
    <Header
      data-testid="app-header"
      align="center"
      direction="row"
      flex={false}
      justify="between"
      gap="small"
      fill="horizontal">
      <Nav
        align="center"
        flex={false}
        pad={{ right: 'medium', left: 'medium' }}
        fill="horizontal"
        direction="row"
        justify="between"
        background={{ color: 'brand' }}>
        <Anchor href="/" color="white">
          <Box align="center" justify="center" direction="row" gap="small">
            <Emoji size="large" color="accent-1" />
            <Heading level="3">IACMCS</Heading>
          </Box>
        </Anchor>
        {screenSize ? (
          <Box align="center" justify="center" direction="row" gap="large">
            <Menu
              label="Menu"
              items={[
                {
                  label: `My Favorites (${favoriteItemsCount})`,
                  onClick: () => handleFavoritesClick(),
                },
                { label: 'Logout', onClick: () => Auth.signOut() },
              ]}
            />
          </Box>
        ) : (
          <Box align="center" justify="center" direction="row" gap="large">
            <Anchor
              data-testid="app-header__favorites"
              icon={<Favorite />}
              label={
                favoriteItemsCount === 0
                  ? 'My Favorites'
                  : `My Favorites (${favoriteItemsCount})`
              }
              onClick={() => handleFavoritesClick()}
            />
            <Anchor
              data-testid="app-header__logout"
              icon={<Logout />}
              onClick={() => Auth.signOut()}
              label="Logout"
              color="white"
            />
          </Box>
        )}
      </Nav>
    </Header>
  );
};

export default memo(AppHeader);
