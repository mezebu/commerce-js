import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";

import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/HeroPage/Hero";
import NavigationTab from "./components/NavigationTabs/NavigationTab";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/Products/ProductsList";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDescription from "./components/Products/ProductDescription";

const App = () => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState({});

  console.log(queryData);

  const searchProduct = (e) => {
    e.preventDefault();

    commerce.products
      .list({ query: query })
      .then(({ data }) => {
        setQueryData(data);
        setQuery("");
      })
      .catch((error) =>
        console.log("There was an error fetching a product", error)
      );
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const sortProducts = () => {
    commerce.products
      .list({ sortBy: "price", sortOder: "desc" })
      .then(({ data }) => setProducts(data))
      .catch((error) => console.log("Error filtering sort order", error));
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
    <Box
      sx={{
        background: "#eef2f3",
        backgroundColor: "linear-gradient(to right, #8e9eab, #eef2f3)",
      }}
    >
      <CssBaseline />
      <AppBar
        searchProduct={searchProduct}
        handleChange={handleChange}
        query={query}
      />
      <Box sx={{ my: -7 }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: 1 }}>
            <NavigationTab sortProducts={sortProducts} />
          </Box>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="products"
              element={<ProductsList products={products} />}
            />
            <Route path=":productId" element={<ProductDescription />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;
