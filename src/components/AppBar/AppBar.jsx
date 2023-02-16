import React from "react";
import { Typography, Avatar, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Badge, Toolbar } from "@mui/material";
import { Container, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

import { useCommerce } from "../../contexts/CommerceContext";

// prettier-ignore
import { useThemeContext, useThemeUpdateContext,} from "../../contexts/ThemeContext";
import { lightMode, darkMode, StyledAppBar } from "./styles";

import store from "../../assets/shopping-cart.png";
import Categories from "../Categories/Categories";

const AppBar = () => {
  const { cart } = useCommerce();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const darkTheme = useThemeContext();
  const theme = darkTheme ? darkMode : lightMode;
  const themeHandler = useThemeUpdateContext();
  const icon = darkTheme ? <LightModeRoundedIcon /> : <ModeNightRoundedIcon />;
  const title = darkTheme ? "Switch to light theme" : "Switch to dark theme";

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
            {pathname === "/" && <Categories />}

            <Box>
              {pathname === "/" && (
                <IconButton
                  aria-label="shopping-cart-icon"
                  onClick={() => navigate("/cart")}
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
    </ThemeProvider>
  );
};

export default AppBar;
