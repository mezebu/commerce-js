import React from "react";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { CenteredFlexDirection } from "../../themes/universalStyles";

const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <CenteredFlexDirection sx={{ height: "40vh" }}>
      <Typography variant="h1" fontWeight={600}>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        Sorry, we can't find that page. You'll find loads to explore on the home
        page
      </Typography>
      <Button onClick={() => navigate("/")} variant="outlined">
        Home Page
      </Button>
    </CenteredFlexDirection>
  );
};

export default NoMatch;
