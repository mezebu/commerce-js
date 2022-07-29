import React from "react";
import { Box, Container, Grid } from "@mui/material";

import QueryItem from "./QueryItem";
import { useCommerce } from "../../contexts/CommerceContext";

const SearchPage = () => {
  const { queryData, handleAddToCart } = useCommerce();
  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Grid container spacing={1}>
          {queryData.map((product) => (
            <Grid key={product.id} item lg={3} md={4} sm={6} xs={12}>
              <QueryItem product={product} onAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchPage;
