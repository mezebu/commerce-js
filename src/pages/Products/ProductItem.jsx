import React, { useState } from "react";
import { CardMedia, Typography, IconButton, Button } from "@mui/material";
import { Card, Avatar, Box, Snackbar } from "@mui/material";
import { blue } from "@mui/material/colors";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import PropTypes from "prop-types";
import MuiAlert from "@mui/material/Alert";
import commerce from "../../lib/commerce";
import ProductModal from "../../components/ProductModal/ProductModal";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ProductItem = ({ product, onAddToCart }) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [productDescription, setProductDescription] = useState({});

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

  const handleModalClose = () => setOpenModal(false);

  const { image, name, price, id, seo } = product;

  const handleDescription = async (productId) => {
    setOpenModal(true);

    try {
      const response = await commerce.products.retrieve(productId);
      setProductDescription(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Card
        elevation={0}
        sx={{ height: 250, mb: 1, position: "relative" }}
        variant="outlined"
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "100%" }}
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
      <ProductModal {...{ openModal, handleModalClose, productDescription }} />
    </>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func,
};
