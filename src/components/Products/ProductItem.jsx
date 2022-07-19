import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia } from "@mui/material";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <Card elevation={0} variant="outlined">
      <CardMedia component="img" height="190" image={product.image?.url} />
    </Card>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
};
