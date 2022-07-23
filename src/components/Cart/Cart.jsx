import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { useCommerce } from "../../contexts/CommerceContext";

const Cart = () => {
  const { cart } = useCommerce();
  const navigate = useNavigate();

  const EmptyCart = () => {
    return (
      <Paper elevation={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Typography>Your cart is empty</Typography>
          <Box sx={{ p: 2 }}>
            <Button variant="outlined" onClick={() => navigate("/products")}>
              Continue Shopping
            </Button>
          </Box>
        </Box>
      </Paper>
    );
  };

  if (!cart.line_items) {
    return "Loading...";
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
