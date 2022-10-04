import React from "react";
import { Box, Badge, Toolbar } from "@mui/material";
import { Typography, Avatar, IconButton } from "@mui/material";
import { Container, Tooltip } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import ModeNightRoundedIcon from "@mui/icons-material/ModeNightRounded";
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
// prettier-ignore
import { useThemeContext, useThemeUpdateContext,} from "../../contexts/ThemeContext";
import { lightMode, darkMode, StyledAppBar } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";

const AppBar = () => {
  const { searchProduct, query, handleChange, cart } = useCommerce();
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

              <Search onSubmit={searchProduct}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search Product"
                  inputProps={{ "aria-label": "search" }}
                  value={query}
                  onChange={handleChange}
                />
              </Search>
              <Box sx={{ p: 2 }}>
                {pathname !== "/cart" && (
                  <Badge badgeContent={cart.total_items} color="primary">
                    <Avatar>
                      <IconButton
                        aria-label="shopping-cart"
                        onClick={() => navigate("/cart")}
                      >
                        <LocalMallOutlinedIcon />
                      </IconButton>
                    </Avatar>
                  </Badge>
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
