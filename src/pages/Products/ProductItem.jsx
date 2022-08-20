import React, { useState } from "react";
import { CardMedia, Typography, IconButton } from "@mui/material";
import { CardActions, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { ProductWrapper } from "./styles";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProductItem = ({ product, onAddToCart }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
    setOpen(true);
  };

  const handleDescription = (productId) => {
    navigate(`/${productId}`);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const { image, name, price, id } = product;

  return (
    <ProductWrapper elevation={0} variant="outlined">
      <CardMedia component="img" height="190" image={image?.url} />
      <CardContent>
        <Typography sx={{ fontWeight: 600 }} gutterBottom variant="body1">
          {name}
        </Typography>
        <Typography sx={{ fontWeight: 500 }} gutterBottom variant="body2">
          {price?.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton color="primary" onClick={handleAddToCart}>
          <AddShoppingCartRoundedIcon />
        </IconButton>
        <IconButton color="primary" onClick={() => handleDescription(id)}>
          <RemoveRedEyeRoundedIcon />
        </IconButton>
      </CardActions>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {name} has been added to your cart
        </Alert>
      </Snackbar>
    </ProductWrapper>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
};
