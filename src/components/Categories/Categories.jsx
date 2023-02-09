import React, { useEffect, useState } from "react";
import { Box, Typography, Button, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useCommerce } from "../../contexts/CommerceContext";
import commerce from "../../lib/commerce";

import { StyledMenu } from "./styles";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const { setProducts, fetchProducts, setLoading } = useCommerce();
  const open = Boolean(anchorEl);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const { data } = await commerce.categories.list();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
  }, [setLoading]);

  const getCategory = async (cat) => {
    setLoading(true);
    try {
      const { data } = await commerce.products.list({
        category_slug: [cat],
      });

      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="customized-button"
        aria-controls={open ? "customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        color="inherit"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Categories
      </Button>
      <StyledMenu
        id="customized-menu"
        MenuListProps={{
          "aria-labelledby": "customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            fetchProducts();
            handleClose();
          }}
          disableRipple
          sx={{ padding: 2 }}
        >
          All
        </MenuItem>
        {categories.map(({ id, name, slug }) => (
          <MenuItem
            onClick={() => {
              handleClose();
              getCategory(slug);
            }}
            disableRipple
            key={id}
            sx={{ padding: 2 }}
          >
            <Typography>{name}</Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </Box>
  );
};

export default Categories;
