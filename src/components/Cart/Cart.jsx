import React from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CenteredFlexItems } from "../../universalStyles";
import { useCommerce } from "../../contexts/CommerceContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useCommerce();
  const navigate = useNavigate();

  const EmptyCart = () => {
    return (
      <Paper elevation={0}>
        <CenteredFlexItems sx={{ height: "60vh", flexDirection: "column" }}>
          <Typography>Your cart is empty</Typography>
          <Box sx={{ p: 2 }}>
            <Button variant="outlined" onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
          </Box>
        </CenteredFlexItems>
      </Paper>
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
    <Container maxWidth="md">
      <Box sx={{ mb: 5 }}>
        {!cart.line_items.length ? (
          <EmptyCart />
        ) : (
          <CartItem
            lineItems={cart.line_items}
            totalItems={cart.total_items}
            subTotal={cart.subtotal.formatted_with_symbol}
          />
        )}
      </Box>
    </Container>
  );
};

export default Cart;
