import React, { useState } from "react";
import {
  Box,
  Paper,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

const SortPanel = ({ sortProducts }) => {
  const [sortOrder, setSortOrder] = useState("");

  const handleChange = (e) => {
    setSortOrder(e.target.value);
  };
  return (
    <Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Button onClick={() => sortProducts("asc")}>Asc</Button>
        </Box>
        <Box sx={{ minWidth: 170 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortOrder}
              label="Sort By"
              onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="descending" onClick={() => sortProducts("desc")}>
                <Typography variant="body2" fontWeight={500}>
                  Price - High to Low{" "}
                </Typography>
              </MenuItem>
              <MenuItem value="ascending" onClick={() => sortProducts("asc")}>
                <Typography variant="body2" fontWeight={500}>
                  Price - Low to high
                </Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Paper>
  );
};

export default SortPanel;
