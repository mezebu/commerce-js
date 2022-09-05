import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { useCommerce } from "../../contexts/CommerceContext";
import { useLocation } from "react-router-dom";
import FilterButton from "../../components/FilterButton/FilterButton";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const { products, handleAddToCart } = useCommerce();
  const { pathname } = useLocation();

  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        {pathname === "/products" && <FilterButton />}

        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product.id} item lg={3} md={4} sm={6} xs={12}>
              <ProductItem product={product} onAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsList;
