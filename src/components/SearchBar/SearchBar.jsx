import React from "react";
import { Box, TextField } from "@mui/material";

import { useCommerce } from "../../contexts/CommerceContext";
import FilterButton from "../FilterButton/FilterButton";

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
      <Box sx={{ ml: 2 }}>
        <FilterButton />
      </Box>
    </Box>
  );
};

export default SearchBar;
