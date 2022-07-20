import React from "react";
import PropTypes from "prop-types";
import {
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { useNavigate } from "react-router-dom";
import { ProductWrapper } from "./styles";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

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
        <Button startIcon={<AddShoppingCartRoundedIcon />}>Add Item</Button>
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
