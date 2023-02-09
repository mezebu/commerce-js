import React, { useState } from "react";
import { Typography, Avatar, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Badge, Toolbar } from "@mui/material";
import { Container, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

// prettier-ignore
import { useThemeContext, useThemeUpdateContext,} from "../../contexts/ThemeContext";
import { lightMode, darkMode, StyledAppBar } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";
import CartDrawer from "../Drawer/CartDrawer";
import store from "../../assets/shopping-cart.png";

const AppBar = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useCommerce();
  const { pathname } = useLocation();
  const darkTheme = useThemeContext();
  const theme = darkTheme ? darkMode : lightMode;
  const themeHandler = useThemeUpdateContext();
  const navigate = useNavigate();
  const icon = darkTheme ? <LightModeRoundedIcon /> : <ModeNightRoundedIcon />;
  const title = darkTheme ? "Switch to light theme" : "Switch to dark theme";

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar color="inherit" component="nav" elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="img"
                src={store}
                alt="store-logo"
                sx={{
                  ml: 1,
                  cursor: "pointer",
                  display: { xs: "none", sm: "block" },
                  height: 35,
                  width: 35,
                }}
                onClick={() => navigate("/")}
              />
            </Box>
            <Box>
              {pathname === "/" && (
                <IconButton
                  aria-label="shopping-cart"
                  onClick={handleDrawerToggle}
                  sx={{ mx: 2 }}
                >
                  <Badge badgeContent={cart.total_items} color="success">
                    <LocalMallOutlinedIcon sx={{ fontSize: 30 }} />
                  </Badge>
                </IconButton>
              )}
            </Box>
            <Tooltip title={title}>
              <Avatar>
                <IconButton onClick={themeHandler}>{icon}</IconButton>
              </Avatar>
            </Tooltip>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <CartDrawer handleDrawerToggle={handleDrawerToggle} open={open} />
    </ThemeProvider>
  );
};

export default AppBar;
