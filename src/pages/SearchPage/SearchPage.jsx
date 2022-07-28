import React from "react";
import { Box, Container, Grid } from "@mui/material";

import QueryItem from "./QueryItem";

const SearchPage = ({ queryData }) => {
  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Grid container spacing={1}>
          {queryData.map((product) => (
            <Grid key={product.id} item lg={3} md={4} sm={6} xs={12}>
              <QueryItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchPage;
