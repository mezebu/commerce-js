import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "../AppBar/AppBar";
import DrawerAppBar from "../Drawer/DrawerAppBar";

function Header({ searchProduct, handleChange, query }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar handleDrawerToggle={handleDrawerToggle} />
      <Box component="nav">
        <DrawerAppBar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Box>
      <Toolbar />
    </Box>
  );
}

export default Header;
