import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
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

const CategoryButton = () => {
  const [open, setOpen] = useState(false);
  const { sortByName } = useCommerce();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sortingByAsc = () => {
    sortByName("asc");
    setOpen(false);
  };

  const sortingByDesc = () => {
    sortByName("desc");
    setOpen(false);
  };
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<FilterListRoundedIcon />}
        onClick={handleClickOpen}
      >
        Filter
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          sx={{
            padding: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton onClick={handleClose}>
            <CloseRoundedIcon />
          </IconButton>
          <Typography variant="h6" align="left">
            Filters
          </Typography>
        </Box>
        <Divider />
        <DialogTitle>{"Sort Direction"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            The direction to sort in, either ascending or descending
          </DialogContentText>
          <Stack direction="row" spacing={1}>
            <ColorButton onClick={sortingByAsc}>Ascending Order</ColorButton>
            <ColorButton onClick={sortingByDesc}>Descending Order</ColorButton>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoryButton;
