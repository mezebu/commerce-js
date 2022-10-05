import React from "react";
import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";

import { StyledDrawer } from "./styles";

const CartDrawer = ({ handleDrawerToggle, open, window }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav" aria-label="cart-items">
      <StyledDrawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Toolbar>
          <Button onClick={handleDrawerToggle}>close</Button>
        </Toolbar>
        <Divider />
        <Typography>Cart Items</Typography>
      </StyledDrawer>
    </Box>
  );
};

export default CartDrawer;
