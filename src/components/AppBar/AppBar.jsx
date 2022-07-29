import React from "react";
import { Typography, Avatar, IconButton, Container } from "@mui/material";
import { AppBar as MUIAppBar, Box, Badge, Toolbar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { Link } from "react-router-dom";
import { useCommerce } from "../../contexts/CommerceContext";

// prettier-ignore
const AppBar = ({ handleDrawerToggle}) => {
const {searchProduct, query, handleChange, cart} = useCommerce()
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar
        component="nav"
        elevation={0}
        sx={{
          background: "rgba( 255, 255, 255, 0.4 )",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/">Logo</Link>
            </Typography>
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
              {pathname === "/products" && (
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
          </Toolbar>
        </Container>
      </MUIAppBar>
    </Box>
  );
};

export default AppBar;

AppBar.propTypes = {
  handleDrawerToggle: PropTypes.func,
};
