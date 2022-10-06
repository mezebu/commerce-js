import React from "react";
import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { StyledDrawer } from "./styles";
import { Cart } from "../../pages";

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
          keepMounted: true,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" fontWeight={600}>
            Cart
          </Typography>
          <Button
            sx={{ textTransform: "none" }}
            onClick={handleDrawerToggle}
            startIcon={<CloseRoundedIcon />}
          >
            Close
          </Button>
        </Toolbar>
        <Divider />
        <Box sx={{ my: 2 }}>
          <Cart handleDrawerToggle={handleDrawerToggle} />
        </Box>
      </StyledDrawer>
    </Box>
  );
};

export default CartDrawer;
