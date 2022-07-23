import React from "react";
import { Box, Container, Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import SortPanel from "../SortPanel/SortPanel";
import { useCommerce } from "../../contexts/CommerceContext";

const ProductsList = () => {
  const { products, handleAddToCart } = useCommerce();

  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Box sx={{ mb: 3 }}>
          <SortPanel />
        </Box>
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
