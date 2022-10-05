import React from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";

import { useCommerce } from "../../contexts/CommerceContext";

import ProductItem from "./ProductItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import Categories from "../../components/Categories/Categories";

const ProductsList = () => {
  const { products, handleAddToCart, loading } = useCommerce();

  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Box>
          <Categories />
        </Box>
        <Box sx={{ py: 3 }}>
          <SearchBar />
        </Box>

        <Grid container spacing={1}>
          {loading ? (
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50vh",
                }}
              >
                <CircularProgress />
              </Box>
            </Grid>
          ) : (
            <>
              {products.map((product) => (
                <Grid key={product.id} item lg={4} md={6} sm={12} xs={12}>
                  <ProductItem
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </Grid>
              ))}
            </>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsList;
