import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { StyledButton } from "./styles";
import { useCommerce } from "../../contexts/CommerceContext";
import commerce from "../../lib/commerce";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const { setProducts, fetchProducts, setLoading } = useCommerce();

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

  return (
    <Box>
      <Typography fontWeight={600} variant="subtitle2" align="center">
        Categories
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <StyledButton variant="text" disableRipple onClick={fetchProducts}>
          All
        </StyledButton>
        {categories.map(({ id, name, slug }) => (
          <Box sx={{ mr: 1 }} key={id}>
            <StyledButton onClick={() => getCategory(slug)}>
              {name}
            </StyledButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Categories;
