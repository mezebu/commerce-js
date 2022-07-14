import React, { Fragment, useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { commerce } from "./lib/commerce";

import TopBanner from "./components/TopBanner/TopBanner";
import AppBar from "./components/AppBar/AppBar";
import Widgets from "./components/Widgets/Widgets";

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
      <TopBanner />
      <AppBar />
      <Box sx={{ my: -7, background: "#F6F9FC" }}>
        <Container maxWidth="xl">
          <Widgets />
        </Container>
      </Box>
    </Fragment>
  );
};

export default App;
