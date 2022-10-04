import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { useCommerce } from "../../contexts/CommerceContext";

import ProductItem from "./ProductItem";
import SearchBar from "../../components/SearchBar/SearchBar";

const ProductsList = () => {
  const { products, handleAddToCart } = useCommerce();

  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Box sx={{ py: 3 }}>
          <SearchBar />
        </Box>

        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product.id} item lg={4} md={6} sm={12} xs={12}>
              <ProductItem product={product} onAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsList;
