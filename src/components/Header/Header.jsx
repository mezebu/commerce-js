import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import AppBar from "../AppBar/AppBar";
import DrawerAppBar from "../Drawer/DrawerAppBar";

const Header = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar />
      <Box component="nav">
        <DrawerAppBar />
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Typography>{children}</Typography>
      </Box>
    </Box>
  );
};

export default Header;
