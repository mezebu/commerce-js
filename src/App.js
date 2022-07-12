import React, { Fragment, useEffect, useState } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { commerce } from "./lib/commerce";

import TopBanner from "./components/TopBanner/TopBanner";
import AppBar from "./components/AppBar/AppBar";

const App = ({ props }) => {
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
      <Container maxWidth="xl">
        <Box sx={{ my: -5 }}>
          <Container>
            {[...new Array(52)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
              )
              .join("\n")}
          </Container>
        </Box>
      </Container>
    </Fragment>
  );
};

export default App;
