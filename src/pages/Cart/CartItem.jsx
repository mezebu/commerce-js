import React from "react";
import { TableBody, TableCell, TableHead, Avatar, Alert } from "@mui/material";
import { Box, IconButton, Table, Snackbar, Typography } from "@mui/material";
import { TableContainer, Button, Paper, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";
import StoreIcon from "@mui/icons-material/Store";

import { ActionButtons, StyledTableCell } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";

const CartItem = ({ lineItems, totalItems, subTotal }) => {
  // prettier-ignore
  const { handleRemoveFromCart, handleCartUpdate, handleEmptyCart, open, handleClose, } = useCommerce();
  const navigate = useNavigate();

  return (
    <TableContainer component={Paper}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" fontWeight={600}>
          Cart
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="subtitle2">
          Total Item(s) in cart : {totalItems}
        </Typography>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Quantity</StyledTableCell>
            <StyledTableCell align="right">Total Price</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lineItems.map(({ id, image, name, price, quantity, line_total }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={image?.url}
                    alt={name}
                    sx={{ height: 60, width: 60 }}
                    variant="rounded"
                  />
                  <Typography variant="body2" sx={{ ml: 2, fontWeight: 600 }}>
                    {name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2">
                  {price?.formatted_with_symbol}
                </Typography>
              </TableCell>
              <TableCell align="left">
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
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2">
                  {line_total.formatted_with_symbol}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleRemoveFromCart(id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            <TableCell rowSpan={3} />
            <TableCell>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Subtotal
              </Typography>
            </TableCell>
            <TableCell align="right">
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {subTotal}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}>
              <Button
                variant="contained"
                color="error"
                startIcon={<RemoveShoppingCartIcon />}
                onClick={handleEmptyCart}
                disableElevation
                fullWidth
              >
                Delete
              </Button>
            </TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                color="info"
                startIcon={<StoreIcon />}
                onClick={() => navigate("/products")}
                disableElevation
                fullWidth
              >
                store
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell align="right">
              <Button
                variant="contained"
                color="success"
                startIcon={<PaidIcon />}
                onClick={() => navigate("/checkout")}
                disableElevation
                fullWidth
              >
                CheckOut
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Quantity has been updated
        </Alert>
      </Snackbar>
    </TableContainer>
  );
};

export default CartItem;

CartItem.propType = {
  lineItems: PropTypes.array,
  totalItems: PropTypes.number,
  subTotal: PropTypes.string,
};
