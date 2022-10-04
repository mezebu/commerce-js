import React from "react";
import { Box, TextField } from "@mui/material";

import { useCommerce } from "../../contexts/CommerceContext";

const SearchBar = () => {
  const { searchProduct, query, handleChange } = useCommerce();

  return (
    <Box
      sx={{ display: "flex", alignItems: "center ", justifyContent: "center" }}
    >
      <Box component="form" onSubmit={searchProduct} sx={{ width: "40rem" }}>
        <TextField
          inputProps={{ "aria-label": "search" }}
          variant="filled"
          label="Search Product"
          value={query}
          onChange={handleChange}
          fullWidth
        />
      </Box>
    </Box>
  );
};

export default SearchBar;
