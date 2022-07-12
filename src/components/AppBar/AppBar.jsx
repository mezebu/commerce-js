import React, { Fragment } from "react";
import {
  AppBar as MUIAppBar,
  Container,
  Fab,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import ElevateScroll from "./ElevateScroll";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const AppBar = () => {
  return (
    <Fragment>
      <ElevateScroll>
        <MUIAppBar elevation={0} position="sticky">
          <Toolbar>
            <Container maxWidth="xl">
              <Typography variant="h6" component="div">
                App bar
              </Typography>
            </Container>
          </Toolbar>
        </MUIAppBar>
      </ElevateScroll>
      <Toolbar id="back-to-top-anchor" />
      <ScrollToTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>
    </Fragment>
  );
};

export default AppBar;
