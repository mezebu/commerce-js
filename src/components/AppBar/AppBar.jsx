import React, { Fragment } from "react";
import { Typography, Avatar, IconButton, Badge, Box } from "@mui/material";
import { AppBar as MUIAppBar, Container, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchIcon from "@mui/icons-material/Search";

import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

const AppBar = ({ query, handleChange, searchProduct }) => {
  const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

  return (
    <Fragment>
      <MUIAppBar
        elevation={0}
        position="sticky"
        color="transparent"
        sx={{
          background: "rgba( 255, 255, 255, 0.35 )",
          backdropFilter: "blur( 4px )",
          WebkitBackdropFilter: "blur( 4px )",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" component="div">
              Logo
            </Typography>
            <Box sx={{ display: "flex" }}>
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
              <Badge badgeContent={4} color="primary">
                <Avatar>
                  <IconButton aria-label="shopping-cart">
                    <LocalMallOutlinedIcon />
                  </IconButton>
                </Avatar>
              </Badge>
            </Box>
          </Toolbar>
        </Container>
      </MUIAppBar>
      <Offset />
    </Fragment>
  );
};

export default AppBar;

AppBar.propTypes = {
  handleChange: PropTypes.func,
  searchProduct: PropTypes.func,
  query: PropTypes.string,
};
