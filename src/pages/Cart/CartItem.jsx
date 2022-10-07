import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Button, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import PaidIcon from "@mui/icons-material/Paid";

import { ActionButtons, StyledCartItems } from "./styles";
import { SpaceBtwFlexItems } from "../../themes/universalStyles";
import { useCommerce } from "../../contexts/CommerceContext";

const CartItem = ({ lineItems, subTotal, handleDrawerToggle }) => {
  // prettier-ignore
  const { handleRemoveFromCart, handleCartUpdate, handleEmptyCart } = useCommerce();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    handleDrawerToggle(false);
  };

  return (
    <>
      <Box>
        {lineItems.map(({ id, image, name, price, quantity, line_total }) => (
          <StyledCartItems key={id}>
            <Box sx={{ display: "flex", alignItems: "center", my: 1 }}>
              <Avatar
                src={image?.url}
                alt={name}
                sx={{ height: 70, width: 67 }}
                variant="rounded"
              />
              <Box>
                <Typography variant="subtitle2" sx={{ ml: 1, fontWeight: 600 }}>
                  {name}
                </Typography>
                <Typography component="span" sx={{ fontSize: 12, ml: 1 }}>
                  {price?.formatted_with_symbol}
                </Typography>

                <SpaceBtwFlexItems sx={{ ml: 1 }}>
                  <ActionButtons>
                    <IconButton
                      size="small"
                      onClick={() => handleCartUpdate(id, quantity - 1)}
                    >
                      <RemoveRoundedIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                    <Typography variant="subtitle2">{quantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleCartUpdate(id, quantity + 1)}
                    >
                      <AddRoundedIcon sx={{ fontSize: 15 }} />
                    </IconButton>
                  </ActionButtons>

                  <Box sx={{ ml: 11, display: "flex", alignItems: "center" }}>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {line_total.formatted_with_symbol}
                    </Typography>
                    <IconButton onClick={() => handleRemoveFromCart(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </SpaceBtwFlexItems>
              </Box>
            </Box>
          </StyledCartItems>
        ))}
      </Box>

      <Box sx={{ my: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Subtotal
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          {subTotal}
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
    </>
  );
};

export default CartItem;

CartItem.propType = {
  lineItems: PropTypes.array.isRequired,
  totalItems: PropTypes.number,
  subTotal: PropTypes.string,
  handleDrawerToggle: PropTypes.func,
};
