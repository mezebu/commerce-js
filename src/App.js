import React, { Fragment, useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { commerce } from "./lib/commerce";

import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/HeroPage/Hero";
import NavigationTab from "./components/NavigationTabs/NavigationTab";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

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
      <Box sx={{ background: "#F6F9FC" }}>
        <AppBar />
        <Box sx={{ my: -7 }}>
          <Container maxWidth="xl">
            <NavigationTab />
            <Hero />
          </Container>
        </Box>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default App;
