import React from "react";
import { Box, CircularProgress, Grid } from "@mui/material";

import { useCommerce } from "../../contexts/CommerceContext";

import ProductItem from "./ProductItem";
import SearchBar from "../../components/SearchBar/SearchBar";

const ProductsList = () => {
  const { products, handleAddToCart, loading } = useCommerce();

  return (
    <Box sx={{ mb: 5 }}>
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
              <Grid key={product.id} item lg={3} md={4} sm={6} xs={12}>
                <ProductItem product={product} onAddToCart={handleAddToCart} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ProductsList;
