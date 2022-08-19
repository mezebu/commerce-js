import React, { useEffect, useState } from "react";
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
import commerce from "../../lib/commerce";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterButton = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const { sortByName, sortByPrice, setProducts } = useCommerce();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await commerce.categories.list();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, []);

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

  const getCategory = async (cat) => {
    try {
      const { data } = await commerce.products.list({
        category_slug: [cat],
      });

      setProducts(data);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          my: 2,
        }}
      >
        <Typography sx={{ mr: 2 }}>Filter Products</Typography>
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
        <DialogTitle>Categories</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex" }}>
            {categories.map(({ id, name, slug }) => (
              <Box sx={{ mr: 1 }} key={id}>
                <ColorButton onClick={() => getCategory(slug)}>
                  {name}
                </ColorButton>
              </Box>
            ))}
          </Box>
        </DialogContent>

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
