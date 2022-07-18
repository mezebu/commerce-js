import React, { Fragment, useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";

import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/HeroPage/Hero";
import NavigationTab from "./components/NavigationTabs/NavigationTab";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/Products/ProductsList";
import NoMatch from "./components/NoMatch/NoMatch";

const App = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});

  console.log(data);

  const searchProduct = (e) => {
    e.preventDefault();

    commerce.products
      .list({ query: query })
      .then(({ data }) => {
        setData(data);
        setQuery("");
      })
      .catch((error) =>
        console.log("There was an error fetching a product", error)
      );
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        searchProduct={searchProduct}
        handleChange={handleChange}
        query={query}
      />
      <Box sx={{ my: -7 }}>
        <Box sx={{ mb: 1 }}>
          <NavigationTab />
        </Box>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="products"
              element={<ProductsList products={products} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Container>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default App;
