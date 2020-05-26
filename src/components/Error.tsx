import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Alert, PowerReset } from 'grommet-icons';
const Loading = () => (
  <Box align="center" justify="center" pad="large">
    <Alert size="large" color="status-error" />
    <Text size="medium" margin="medium">
      Failed to get comic, please retry..
    </Text>
    <Button label="Retry" href="/" icon={<PowerReset />} />
  </Box>
);

export default Loading;
