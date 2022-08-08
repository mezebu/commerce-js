import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Paper, FormControl } from "@mui/material";
import { InputLabel, Select, MenuItem, Typography } from "@mui/material";

import { useCommerce } from "../../contexts/CommerceContext";
import CategoryButton from "../CategoryButton/CategoryButton";

const SortPanel = () => {
  const { sortByPrice, sortByName } = useCommerce();
  const [sortOrder, setSortOrder] = useState("");

  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ minWidth: 180 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortOrder}
              label="Sort By"
              onChange={handleChange}
            >
              <MenuItem value="asc" onClick={() => sortByName("asc")}>
                <Typography variant="body2" fontWeight={500}>
                  Name - Ascending
                </Typography>
              </MenuItem>
              <MenuItem value="desc" onClick={() => sortByName("desc")}>
                <Typography variant="body2" fontWeight={500}>
                  Name - Descending
                </Typography>
              </MenuItem>
              <MenuItem value="descending" onClick={() => sortByPrice("desc")}>
                <Typography variant="body2" fontWeight={500}>
                  Price - High to Low{" "}
                </Typography>
              </MenuItem>
              <MenuItem value="ascending" onClick={() => sortByPrice("asc")}>
                <Typography variant="body2" fontWeight={500}>
                  Price - Low to high
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <CategoryButton />
        </Box>
      </Box>
    </Paper>
  );
};

export default SortPanel;

SortPanel.propTypes = {
  sortByPrice: PropTypes.func,
  sortByName: PropTypes.func,
};
