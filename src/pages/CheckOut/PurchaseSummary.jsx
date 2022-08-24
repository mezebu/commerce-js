import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { TableContainer, Table, TableCell } from "@mui/material";
import { Divider, TableRow, TableHead, TableBody } from "@mui/material";
import PropTypes from "prop-types";

const PurchaseSummary = ({ checkoutToken }) => {
  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ mt: 2 }} gutterBottom>
        Order Summary
      </Typography>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkoutToken.line_items.map(
              ({ id, image, name, quantity, line_total }) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar
                      alt={name}
                      src={image?.url}
                      sx={{ height: 50, width: 50 }}
                    />
                  </TableCell>
                  <TableCell align="left">{name}</TableCell>
                  <TableCell align="left">{quantity}</TableCell>
                  <TableCell align="left">
                    {line_total?.formatted_with_symbol}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ py: 1 }}>
        <Typography
          align="right"
          variant="subtitle1"
          sx={{ fontWeight: 600 }}
          gutterBottom
        >
          Total
        </Typography>
        <Typography
          align="right"
          variant="subtitle1"
          sx={{ fontWeight: 700 }}
          gutterBottom
        >
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default PurchaseSummary;

PurchaseSummary.propType = {
  checkoutToken: PropTypes.object,
};
