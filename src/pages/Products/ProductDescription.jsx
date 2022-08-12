import React, { useEffect, useState } from "react";
import { CardContent, Card, CardMedia, LinearProgress } from "@mui/material";
import { Divider, Snackbar, Button, Stack, Typography } from "@mui/material";
import { Alert, Box, Grid, CircularProgress, Container } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import commerce from "../../lib/commerce";
import { useCommerce } from "../../contexts/CommerceContext";

import { CartButton, Divide, BuyButton } from "./styles";
import {
  SpaceBtwFlexItems,
  CenteredFlexItems,
} from "../../themes/universalStyles";

const ProductDescription = () => {
  const { handleAddToCart, setOpen, open, handleClose } = useCommerce();
  let { productId } = useParams();
  const navigate = useNavigate();

  const [productDsec, setProductDsec] = useState({});
  const [loading, setLoading] = useState(false);

  const { image, name, price, seo, description, id, inventory } = productDsec;

  const addToCartHandler = () => {
    handleAddToCart(id, 1);
    setOpen(true);
  };

  useEffect(() => {
    const handleDescription = async () => {
      try {
        setLoading(true);
        const response = await commerce.products.retrieve(productId);
        setLoading(false);
        setProductDsec(response);
      } catch (error) {
        setLoading(false);
        console.log("Could not fetch Product", error);
      }
    };

    handleDescription();
  }, [productId]);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 5 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Product Detail
          </Typography>
        </Box>
        <Card elevation={0} variant="outlined">
          {loading && (
            <CenteredFlexItems sx={{ height: "60vh" }}>
              <CircularProgress />
            </CenteredFlexItems>
          )}
          {id && (
            <Grid container>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: "100%" }}
                  image={image?.url}
                  alt={name}
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      component="div"
                    >
                      {price?.formatted_with_symbol}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      component="div"
                    >
                      {seo?.description}
                    </Typography>
                  </CardContent>
                  <Box sx={{ p: 1 }}>
                    <Divide>
                      <Divider>Description</Divider>
                      <Typography
                        component="span"
                        variant="body2"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </Divide>
                    <Divider>Actions</Divider>
                    <SpaceBtwFlexItems>
                      {inventory.available > 0 ? (
                        <>
                          <Typography variant="subtitle2">
                            Available Quantity: {inventory.available}
                          </Typography>

                          <Box sx={{ width: "10%" }}>
                            <LinearProgress
                              variant="determinate"
                              value={inventory.available}
                              color={
                                inventory.available < 20 ? "error" : "primary"
                              }
                              sx={{ borderRadius: 5 }}
                            />
                          </Box>
                        </>
                      ) : null}
                    </SpaceBtwFlexItems>
                    <Box
                      sx={{
                        mt: 3,
                      }}
                    >
                      <Stack spacing={2} direction="row">
                        <CartButton
                          startIcon={<AddShoppingCartIcon />}
                          variant="contained"
                          disableElevation
                          onClick={addToCartHandler}
                        >
                          Add to cart
                        </CartButton>
                        <BuyButton
                          variant="contained"
                          disableElevation
                          onClick={() => navigate("/products")}
                        >
                          Continue shopping
                        </BuyButton>
                        <Button
                          variant="contained"
                          color="info"
                          disableElevation
                          onClick={() => navigate("/cart")}
                        >
                          Go to Cart
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          )}
        </Card>
      </Box>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {`${name} has been added to cart`}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDescription;
