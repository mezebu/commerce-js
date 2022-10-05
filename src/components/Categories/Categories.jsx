import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

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
    <>
      <Typography fontWeight={600} variant="subtitle2" align="center">
        Categories
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={fetchProducts}>All</Button>
        {categories.map(({ id, name, slug }) => (
          <Box sx={{ mr: 1 }} key={id}>
            <Button onClick={() => getCategory(slug)}>{name}</Button>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Categories;
