import React from "react";
import { Box, CircularProgress, Typography, Container } from "@mui/material";
import PropTypes from "prop-types";

import { CenteredFlexItems } from "../../themes/universalStyles";
import { useCommerce } from "../../contexts/CommerceContext";
import CartItem from "./CartItem";

const Cart = ({ handleDrawerToggle }) => {
  const { cart } = useCommerce();

  const EmptyCart = () => {
    return (
      <>
        <CenteredFlexItems sx={{ height: "60vh", flexDirection: "column" }}>
          <Typography>Your cart is empty</Typography>
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
    <Container maxWidth="md">
      <Box sx={{ mb: 5 }}>
        {!cart.line_items.length ? (
          <EmptyCart />
        ) : (
          <CartItem
            lineItems={cart.line_items}
            totalItems={cart.total_items}
            subTotal={cart.subtotal.formatted_with_symbol}
            handleDrawerToggle={handleDrawerToggle}
          />
        )}
      </Box>
    </Container>
  );
};

export default Cart;

Cart.propType = {
  handleDrawerToggle: PropTypes.func,
};
