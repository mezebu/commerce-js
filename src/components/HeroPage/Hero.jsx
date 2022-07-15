import { Grid } from "@mui/material";
import React from "react";
import SwipeableCard from "./SwipeableCard";
import HeroCardOne from "./HeroCardOne";
import HeroCardTwo from "./HeroCardTwo";

const Hero = () => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <SwipeableCard />
      </Grid>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        <HeroCardOne />
        <HeroCardTwo />
      </Grid>
    </Grid>
  );
};

export default Hero;
