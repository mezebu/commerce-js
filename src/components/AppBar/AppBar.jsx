import React from "react";
import { Typography, Avatar, IconButton } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Badge, Toolbar } from "@mui/material";
import { Container, Tooltip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";

// prettier-ignore
import { useThemeContext, useThemeUpdateContext,} from "../../contexts/ThemeContext";
import { lightMode, darkMode, StyledAppBar } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";

const AppBar = () => {
  const { cart } = useCommerce();
  const { pathname } = useLocation();
  const darkTheme = useThemeContext();
  const theme = darkTheme ? darkMode : lightMode;
  const themeHandler = useThemeUpdateContext();
  const navigate = useNavigate();
  const icon = darkTheme ? <LightModeRoundedIcon /> : <ModeNightRoundedIcon />;
  const title = darkTheme ? "Switch to light theme" : "Switch to dark theme";

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar color="inherit" component="nav" elevation={0}>
          <Container maxWidth="xl">
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                {pathname !== "/search" && (
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
                  >
                    <StoreRoundedIcon
                      sx={{ cursor: "pointer", fontSize: 40 }}
                      color="secondary"
                      onClick={() => navigate("/")}
                    />
                  </Typography>
                )}
              </Box>
              <Box>
                {pathname !== "/cart" && (
                  <IconButton
                    aria-label="shopping-cart"
                    onClick={() => navigate("/cart")}
                  >
                    <Badge badgeContent={cart.total_items} color="success">
                      <LocalMallOutlinedIcon sx={{ fontSize: 30 }} />
                    </Badge>
                  </IconButton>
                )}
              </Box>
              <Box sx={{ mr: 2 }}>
                {pathname === "/search" && (
                  <Avatar>
                    <Tooltip title="Back to products page">
                      <IconButton
                        aria-label="shopping-cart"
                        onClick={() => navigate("/products")}
                      >
                        <StoreMallDirectoryIcon />
                      </IconButton>
                    </Tooltip>
                  </Avatar>
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
      </Box>
    </ThemeProvider>
  );
};

export default AppBar;
