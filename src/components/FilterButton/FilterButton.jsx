import React, { useState } from "react";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import { Dialog, Stack, IconButton } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { ColorButton } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterButton = () => {
  const [open, setOpen] = useState(false);
  const { sortByName, sortByPrice } = useCommerce();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sortOrder = (order) => {
    sortByName(order);
    setOpen(false);
  };

  const sortPriceOrder = (order) => {
    sortByPrice(order);
    setOpen(false);
  };

  return (
    <div>
      <Box>
        <Avatar>
          <IconButton aria-label="filter products" onClick={handleClickOpen}>
            <FilterListRoundedIcon />
          </IconButton>
        </Avatar>
      </Box>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
          <IconButton onClick={handleClose}>
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
          <Box sx={{ marginLeft: "auto", marginRight: "auto" }}>
            <Typography variant="h6">Filters</Typography>
          </Box>
        </Box>
        <Divider />

        <DialogTitle>Sort Direction</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "text.primary", mb: 1 }}>
            The direction to sort in, either ascending or descending
          </DialogContentText>
          <Stack direction="row" spacing={1}>
            <ColorButton onClick={() => sortOrder("asc")}>
              Ascending Order
            </ColorButton>
            <ColorButton onClick={() => sortOrder("desc")}>
              Descending Order
            </ColorButton>
          </Stack>
        </DialogContent>
        <DialogTitle>{"Price"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "text.primary", mb: 1 }}>
            Order to sort price of products
          </DialogContentText>
          <Stack direction="row" spacing={1}>
            <ColorButton onClick={() => sortPriceOrder("asc")}>
              Price - Low to high
            </ColorButton>
            <ColorButton onClick={() => sortPriceOrder("desc")}>
              Price - High to Low
            </ColorButton>
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterButton;
