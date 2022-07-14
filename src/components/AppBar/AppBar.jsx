import React, { Fragment } from "react";
import {
  AppBar as MUIAppBar,
  Container,
  Fab,
  Toolbar,
  Typography,
  Avatar,
  IconButton,
  Badge,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import ElevateScroll from "./ElevateScroll";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const AppBar = () => {
  return (
    <Fragment>
      <ElevateScroll>
        <MUIAppBar elevation={0} position="sticky" color="inherit">
          <Container maxWidth="xl">
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 70,
              }}
            >
              <Typography variant="h6" component="div">
                Logo
              </Typography>

              <Badge badgeContent={4} color="primary">
                <Avatar>
                  <IconButton aria-label="shopping-cart">
                    <LocalMallOutlinedIcon />
                  </IconButton>
                </Avatar>
              </Badge>
            </Toolbar>
          </Container>
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
