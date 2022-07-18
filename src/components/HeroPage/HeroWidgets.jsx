import React from "react";
import { Box, Toolbar, Grid } from "@mui/material";
import WidgetsCard from "./WidgetsCard";
import { widgetsItems } from "./data";

const HeroWidgets = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {widgetsItems.map((item) => (
          <Grid key={item.id} item xs={6} sm={6} md={6} lg={3}>
            <WidgetsCard item={item} />
          </Grid>
        ))}
      </Grid>

      <Toolbar />
    </Box>
  );
};

export default HeroWidgets;
