import React from "react";
import { Table, TableBody, TableCell, TableContainer } from "@mui/material";
import { IconButton, Typography, Avatar } from "@mui/material";
import { TableHead, TableRow, Paper } from "@mui/material";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

import { ActionButtons } from "./styles";

import { useCommerce } from "../../contexts/CommerceContext";

const CartItem = ({ lineItems }) => {
  const { handleRemoveFromCart, handleCartUpdate } = useCommerce();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="cart">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="right">Delete Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lineItems.map(({ id, image, name, price, quantity, line_total }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar
                  src={image?.url}
                  alt={name}
                  sx={{ height: 70, width: 70 }}
                  variant="rounded"
                />
              </TableCell>
              <TableCell align="left">
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {name}
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 600 }}
                >
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
              <TableCell align="center">
                <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                  {line_total.formatted_with_symbol}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => handleRemoveFromCart(id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartItem;

CartItem.propType = {
  lineItems: PropTypes.array.isRequired,
};
