import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { Cardd } from './card';

const AllData = ({ data }) => {
  return (
    <Box className='main-box'>
      <Container>
        <Grid container spacing={2}>
          {data &&
            data.map((el, index) => {
              return (
                <>
                  <Grid key={index} item xs={12} md={4}>
                    <Cardd post={el} />
                  </Grid>
                </>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllData;
