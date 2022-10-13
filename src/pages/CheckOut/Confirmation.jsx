import React from "react";
import { CircularProgress, Divider, Typography } from "@mui/material";
import { Avatar, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";

import { useCommerce } from "../../contexts/CommerceContext";
import { CenteredFlexItems, JustifyCenter } from "../../themes/universalStyles";

const Confirmation = () => {
  const { order } = useCommerce();
  const navigate = useNavigate();

  if (!order) return null;

  const { customer, order_value, customer_reference } = order;

  return (
    <Box>
      {order.customer ? (
        <Box sx={{ my: 3 }}>
          <JustifyCenter>
            <Avatar sx={{ bgcolor: green[300], width: 80, height: 80 }}>
              <VerifiedRoundedIcon sx={{ fontSize: 70 }} />
            </Avatar>
          </JustifyCenter>
          <Typography sx={{ p: 2 }} align="center" gutterBottom>
            Your payment has been processed successfully <br /> and your order
            has been confirmed
          </Typography>
          <Divider variant="middle" />
          <Box sx={{ p: 3 }}>
            <Typography>
              {"Customer: "} {customer.firstname} {customer.lastname}
            </Typography>
            <Typography>
              {"Amount: "} {order_value.formatted_with_symbol}
            </Typography>
            <Typography>
              {"Payment ID: "} {customer_reference}
            </Typography>
          </Box>
          <CenteredFlexItems>
            <Button onClick={() => navigate("/")}>Back to home</Button>
          </CenteredFlexItems>
        </Box>
      ) : (
        <CenteredFlexItems sx={{ my: 5 }}>
          <CircularProgress />
        </CenteredFlexItems>
      )}
    </Box>
  );
};

export default Confirmation;
