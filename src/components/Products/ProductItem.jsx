import React from "react";
import { CardMedia, Button, Typography } from "@mui/material";
import { CardActions, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PropTypes from "prop-types";

import { ProductWrapper } from "./styles";

const ProductItem = ({ product, onAddToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  const handleDescription = (id) => {
    navigate(`/${id}`);
  };

  return (
    <ProductWrapper elevation={0} variant="outlined">
      <CardMedia component="img" height="190" image={product.image?.url} />
      <CardContent>
        <Typography sx={{ fontWeight: 600 }} gutterBottom variant="body1">
          {product.name}
        </Typography>
        <Typography sx={{ fontWeight: 500 }} gutterBottom variant="body2">
          {product.price.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          startIcon={<AddShoppingCartRoundedIcon />}
          onClick={handleAddToCart}
        >
          Add Item
        </Button>
        <Button
          startIcon={<RemoveRedEyeRoundedIcon />}
          onClick={() => handleDescription(product.id)}
        >
          Description
        </Button>
      </CardActions>
    </ProductWrapper>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
};
