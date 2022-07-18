import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";

const WidgetsCard = ({ item }) => {
  const { title, icon, subTitle } = item;

  return (
    <Card
      sx={{
        minWidth: 275,
        boxShadow:
          " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      }}
      variant="outlined"
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ pr: 2 }}>{icon}</Box>

          <Box>
            <Typography
              sx={{ fontSize: 15, fontWeight: 600 }}
              variant="h6"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body2">{subTitle}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WidgetsCard;

WidgetsCard.propTypes = {
  item: PropTypes.object,
};
