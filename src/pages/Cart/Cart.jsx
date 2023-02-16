import React from "react";
import { Box, CircularProgress, Typography, Container } from "@mui/material";
import { Grid, Card, Button, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import PaidIcon from "@mui/icons-material/Paid";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { CenteredFlexItems } from "../../themes/universalStyles";
import { useCommerce } from "../../contexts/CommerceContext";
import CartItem from "./CartItem";

const Cart = ({ handleDrawerToggle }) => {
  const navigate = useNavigate();
  const { cart, handleEmptyCart } = useCommerce();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const EmptyCart = () => {
    return (
      <>
        <CenteredFlexItems sx={{ height: "60vh", flexDirection: "column" }}>
          <Typography>Your cart is empty</Typography>
          <Button onClick={() => navigate("/")}>Back Home</Button>
        </CenteredFlexItems>
      </>
    );
  };

  if (!cart.line_items) {
    return (
      <CenteredFlexItems sx={{ height: "60vh" }}>
        <CircularProgress />
      </CenteredFlexItems>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 5 }}>
        {!cart.line_items.length ? (
          <EmptyCart />
        ) : (
          <Grid container spacing={2}>
            <Grid item lg={8} md={7} sm={12} xs={12}>
              <Card>
                <CartItem
                  lineItems={cart.line_items}
                  totalItems={cart.total_items}
                  subTotal={cart.subtotal.formatted_with_symbol}
                  handleDrawerToggle={handleDrawerToggle}
                />
              </Card>
            </Grid>
            <Grid item lg={4} md={5} sm={12} xs={12}>
              <Card variant="outlined">
                <CardContent>
                  <Box
                    sx={{
                      my: 1,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      Subtotal
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                      {cart.subtotal.formatted_with_symbol}
                    </Typography>
                  </Box>
                  <Box sx={{ "& button": { mb: 1 }, textTransform: "none" }}>
                    <Button
                      variant="contained"
                      color="error"
                      size="large"
                      startIcon={<RemoveShoppingCartIcon />}
                      onClick={handleEmptyCart}
                      disableElevation
                      fullWidth
                      sx={{ textTransform: "none" }}
                    >
                      Clear Cart
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="large"
                      startIcon={<PaidIcon />}
                      onClick={handleCheckout}
                      disableElevation
                      sx={{ textTransform: "none" }}
                      fullWidth
                    >
                      Check Out
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default Cart;

Cart.propType = {
  handleDrawerToggle: PropTypes.func,
};
