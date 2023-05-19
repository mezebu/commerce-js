import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// Material-UI components
import { Box, CircularProgress, Typography, Container } from "@mui/material";
import { Grid, Card, Button, CardContent } from "@mui/material";

// Material-UI icons
import PaidIcon from "@mui/icons-material/Paid"; // PaidIcon for indicating a paid status
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"; // RemoveShoppingCartIcon for indicating removal from cart

// Custom styles and context
import { CenteredFlexItems } from "../../themes/universalStyles"; // Custom style for centering flex items
import { useCommerce } from "../../contexts/CommerceContext"; // Custom CommerceContext for commerce-related operations

import CartItem from "./CartItem"; // Custom CartItem component for rendering individual cart items

const Cart = ({ handleDrawerToggle }) => {
  const navigate = useNavigate();
  const { cart, handleEmptyCart } = useCommerce();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const EmptyCart = () => (
    <CenteredFlexItems sx={{ height: "60vh", flexDirection: "column" }}>
      <Typography>Your cart is empty</Typography>
      <Button onClick={() => navigate("/")}>Back Home</Button>
    </CenteredFlexItems>
  );

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
