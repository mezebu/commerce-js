import React, { useState } from "react";
import { CardMedia, Typography, IconButton } from "@mui/material";
import { Card, CardContent, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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
    <>
      <Card sx={{ display: "flex" }} elevation={0} variant="outlined">
        <CardMedia
          component="img"
          sx={{ width: 160 }}
          height="130"
          image={image?.url}
          alt={name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {price?.formatted_with_symbol}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1 }}>
            <IconButton color="primary" onClick={handleAddToCart}>
              <AddCircleRoundedIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => handleDescription(id)}>
              <RemoveRedEyeRoundedIcon />
            </IconButton>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {name} has been added to your cart
          </Alert>
        </Snackbar>
      </Card>
    </>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
};
