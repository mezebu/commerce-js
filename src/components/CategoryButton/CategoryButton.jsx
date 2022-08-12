import React, { useEffect, useState } from "react";
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
import commerce from "../../lib/commerce";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CategoryButton = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const { sortByName } = useCommerce();
  console.log(categories);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchCategory = async () => {
    try {
      const response = await commerce.categories.list();
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  const sortingByAsc = () => {
    sortByName("asc");
    setOpen(false);
  };

  const sortingByDesc = () => {
    sortByName("desc");
    setOpen(false);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

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
            <ColorButton onClick={sortingByAsc}>Ascending Order</ColorButton>
            <ColorButton onClick={sortingByDesc}>Descending Order</ColorButton>
          </Stack>
        </DialogContent>
        <DialogTitle>{"Sort Direction"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "text.primary", mb: 1 }}>
            The direction to sort in, either ascending or descending
          </DialogContentText>
          <Stack direction="row" spacing={1}>
            <ColorButton onClick={sortingByAsc}>Ascending Order</ColorButton>
            <ColorButton onClick={sortingByDesc}>Descending Order</ColorButton>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Typography>testing</Typography>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CategoryButton;
