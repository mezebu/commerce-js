import React from "react";
import { TableBody, TableCell, TableHead, Avatar, Button } from "@mui/material";
import { Box, IconButton, Table, Typography } from "@mui/material";
import { TableContainer, Paper, TableRow } from "@mui/material";
import PropTypes from "prop-types";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import PaidIcon from "@mui/icons-material/Paid";

import { ActionButtons, StyledTableCell } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";

const CartItem = ({ lineItems, totalItems, subTotal }) => {
  const { handleRemoveFromCart, handleCartUpdate, handleEmptyCart } =
    useCommerce();

  return (
    <TableContainer component={Paper}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" fontWeight={600}>
          Cart
        </Typography>
        <Typography sx={{ fontWeight: 500 }} variant="subtitle2">
          Total Item in cart ({totalItems})
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
          {lineItems.map(({ id, media, name, price, quantity, line_total }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              hover
            >
              <TableCell component="th" scope="row">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={media.source}
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
                  {price.formatted_with_symbol}
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
            <TableCell colSpan={1}>
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
                disableElevation
                onClick={handleEmptyCart}
              >
                Delete
              </Button>
            </TableCell>
            <TableCell align="right">
              <Button
                variant="contained"
                color="info"
                startIcon={<PaidIcon />}
                disableElevation
              >
                CheckOut
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartItem;

CartItem.propType = {
  lineItems: PropTypes.array,
  totalItems: PropTypes.number,
  onUpdateCartQty: PropTypes.func,
  subTotal: PropTypes.string,
};
