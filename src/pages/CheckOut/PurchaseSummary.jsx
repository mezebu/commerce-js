import React, { Fragment } from "react";
import { Box, Typography, Avatar, List, ListItemAvatar } from "@mui/material";
import { Divider, ListItem, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

const PurchaseSummary = ({ checkoutToken }) => {
  return (
    <Box>
      <Typography variant="h6" align="center" sx={{ mt: 2 }} gutterBottom>
        Order Summary
      </Typography>
      <Box sx={{ m: 5 }}>
        {checkoutToken.line_items.map(
          ({ id, image, name, quantity, line_total }) => (
            <Fragment key={id}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
              >
                <ListItem
                  secondaryAction={
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {line_total?.formatted_with_symbol}
                    </Typography>
                  }
                >
                  <ListItemAvatar>
                    <Avatar alt={name} src={image?.url} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    secondary={
                      <Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          Qunatity: {quantity}
                        </Typography>
                      </Fragment>
                    }
                  />
                </ListItem>
              </List>
              <Divider />
            </Fragment>
          )
        )}
      </Box>
      <Box>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }} gutterBottom>
          Total
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }} gutterBottom>
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
