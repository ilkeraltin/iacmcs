import React, { memo } from 'react';
import { Text, Footer, Box, Anchor } from 'grommet';

const AppFooter = () => (
  <Footer
    data-testid="app-footer"
    align="center"
    direction="row"
    flex={false}
    justify="center"
    gap="medium"
    fill="horizontal"
    background={{ color: 'dark-3' }}
    pad="small">
    <Box align="center" justify="between" fill direction="row" gap="medium">
      <Text data-testid="app-footer__sign">ilker.altin@linkit.nl @ 2020</Text>
      <Anchor
        href="https://github.com/ilkeraltin/iacmcs"
        target="_blank"
        data-testid="app-footer__link"
        label="Github Repo"
      />
    </Box>
  </Footer>
);

export default memo(AppFooter);
