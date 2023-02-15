import React, { useState } from "react";
import { CardMedia, Typography, IconButton, Button } from "@mui/material";
import { Card, Avatar, Box, Snackbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PropTypes from "prop-types";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProductItem = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleDescription = async (productId) => {
    navigate(`${productId}`);
  };

  const { image, name, price, id, seo } = product;

  return (
    <>
      <Card
        elevation={0}
        sx={{ height: 250, mb: 1, position: "relative" }}
        variant="outlined"
      >
        <CardMedia
          component="img"
          sx={{ height: "100%" }}
          image={image?.url}
          alt={name}
        />
        <Avatar
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            bgcolor: (theme) =>
              theme.palette.mode === "light"
                ? blue[50]
                : theme.palette.primary.dark,
          }}
        >
          <IconButton color="default" onClick={() => handleDescription(id)}>
            <RemoveRedEyeRoundedIcon />
          </IconButton>
        </Avatar>
      </Card>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          {name}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
          {price?.formatted_with_symbol}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle2" sx={{ fontSize: 12, mb: 1 }}>
          {seo.description}
        </Typography>
        <Button variant="outlined" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {name} has been added to your cart
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
};
