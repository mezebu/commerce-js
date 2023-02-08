import React from "react";
import { Box, Paper, Typography } from "@mui/material";

import gadget from "../../assets/Gadget.png";
import { StyledBanner } from "./styles";

const Banner = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        mt: 2,
        bgcolor: (theme) =>
          theme.palette.mode === "light"
            ? "palegreen"
            : theme.palette.info.dark,
      }}
    >
      <StyledBanner>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Grab Upto 50% Off On <br /> Selected Products
          </Typography>
        </Box>
        <Box>
          <Box
            component="img"
            src={gadget}
            alt="Gadgets"
            sx={{ maxWidth: 250 }}
          />
        </Box>
      </StyledBanner>
    </Paper>
  );
};

export default Banner;
