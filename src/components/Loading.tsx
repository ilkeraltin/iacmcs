import React from 'react';
import { Box, Text } from 'grommet';
import { InProgress } from 'grommet-icons';
const Loading = () => (
  <Box
    align="center"
    justify="center"
    fill="horizontal"
    direction="row"
    gap="small">
    <InProgress size="large" color="accent-4" />
    <Text size="large">Loading...</Text>
  </Box>
);

export default Loading;
