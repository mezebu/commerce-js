import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PropTypes from "prop-types";

import { StyledDrawer, StyledToolbar } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";
import { Cart } from "../../pages";

const CartDrawer = ({ handleDrawerToggle, open, window }) => {
  // prettier-ignore
  const container = window !== undefined ? () => window().document.body : undefined;
  const { cart } = useCommerce();

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
        <StyledToolbar>
          <Box>
            <Typography variant="subtitle1" fontWeight={700}>
              Cart
            </Typography>
            <Typography variant="subtitle2" fontWeight={600}>
              Item(s) in cart : {cart.total_items}
            </Typography>
          </Box>

          <Button
            sx={{ textTransform: "none" }}
            onClick={handleDrawerToggle}
            startIcon={<CloseRoundedIcon />}
          >
            Close
          </Button>
        </StyledToolbar>
        <Divider />
        <Box sx={{ my: 2 }}>
          <Cart handleDrawerToggle={handleDrawerToggle} />
        </Box>
      </StyledDrawer>
    </Box>
  );
};

export default CartDrawer;

CartDrawer.propType = {
  oepn: PropTypes.func,
  window: PropTypes.node,
  handleDrawerToggle: PropTypes.func,
};
