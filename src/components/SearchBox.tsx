import React from 'react';
import { Box, TextInput, Form } from 'grommet';
import { Search } from 'grommet-icons';
const SearchBox = () => (
  <Box fill={true} pad={{ bottom: 'medium' }} margin={{ bottom: 'medium' }}>
    <Form>
      <TextInput
        name="searchComic"
        icon={<Search />}
        placeholder="Search in favorites"
        plain={false}
        reverse={true}
        type="text"
      />
    </Form>
  </Box>
);

export default SearchBox;
