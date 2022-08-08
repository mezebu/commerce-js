import React from "react";
import { Box, Typography, List, ListItem, Avatar } from "@mui/material";
import { Divider, ListItemText, ListItemAvatar } from "@mui/material";

const PurchaseSummary = ({ checkoutToken }) => {
  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ mt: 2 }} gutterBottom>
        Order Summary
      </Typography>
      {checkoutToken.line_items.map(
        ({ id, image, name, quantity, line_total }) => (
          <List key={id} sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem
              secondaryAction={
                <Typography>{line_total?.formatted_with_symbol}</Typography>
              }
            >
              <ListItemAvatar>
                <Avatar alt={name} src={image?.url} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {name}
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="subtitle2"
                      color="text.primary"
                    >
                      Quantity: {quantity}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        )
      )}
      <Box sx={{ p: 3 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          Total
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
};

export default PurchaseSummary;
