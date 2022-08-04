import { Stack } from '@mui/material';
import React from 'react';
import Hero from './Hero';

function PostList({ heroes }) {
  return (
    <Stack
      className="my-posts-container postlist"
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      {heroes.results.map((hero, ind) => (
        <Hero key={ind + 1} hero={hero} />
      ))}
    </Stack>
  );
}

export default PostList;
