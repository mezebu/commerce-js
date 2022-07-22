import React from "react";
import PropTypes from "prop-types";
import { Box, Container, Grid } from "@mui/material";
import ProductItem from "./ProductItem";
import SortPanel from "../SortPanel/SortPanel";

const ProductsList = ({ products, sortProducts }) => {
  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Box sx={{ mb: 3 }}>
          <SortPanel sortProducts={sortProducts} />
        </Box>
        <Grid container spacing={1}>
          {products.map((product) => (
            <Grid key={product.id} item lg={3} md={4} sm={6} xs={12}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array,
  sortProducts: PropTypes.func,
};
