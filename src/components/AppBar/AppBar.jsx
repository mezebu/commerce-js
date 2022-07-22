import React from "react";
import { Typography, Avatar, IconButton, Badge } from "@mui/material";
import { AppBar as MUIAppBar, Box, Toolbar } from "@mui/material";
import PropTypes from "prop-types";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { Link } from "react-router-dom";

//prettier-ignore
const AppBar = ({ query, handleChange, searchProduct, handleDrawerToggle }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar
        component="nav"
        elevation={0}
        sx={{
          background: "rgba( 255, 255, 255, 0.35 )",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
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
            <Link to='/'>Logo</Link>
            
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
          <Box sx={{p:2}}>
            <Badge badgeContent={4} color="primary">
              <Avatar>
                <IconButton aria-label="shopping-cart">
                  <LocalMallOutlinedIcon />
                </IconButton>
              </Avatar>
            </Badge>
          </Box>         
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};

export default AppBar;

AppBar.propTypes = {
  handleChange: PropTypes.func,
  searchProduct: PropTypes.func,
  query: PropTypes.string,
  handleDrawerToggle: PropTypes.func,
};
