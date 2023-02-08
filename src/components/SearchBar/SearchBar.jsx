import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import { useCommerce } from "../../contexts/CommerceContext";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

const SearchBar = () => {
  const { searchProduct, query, handleChange } = useCommerce();

  return (
    <Search onSubmit={searchProduct}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        label="Search Product"
        value={query}
        onChange={handleChange}
        inputProps={{ "aria-label": "search" }}
        placeholder="Search Product…"
      />
    </Search>
  );
};

export default SearchBar;
