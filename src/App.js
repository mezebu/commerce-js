import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

// prettier-ignore
import { Hero, ProductsList, ProductDescription, Cart, NoMatch, CheckOut, SearchPage,  } from "./pages";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import { CommerceContext } from "./contexts/CommerceContext";

const App = () => {
  return (
    <CommerceContext>
      <CssBaseline />
      <Header />
      <Container maxWidth="xl">
        <Box component="main" sx={{ p: 3 }}>
          <Routes>
            <Route path="/">
              <Route index element={<Hero />} />
              <Route path="products" element={<ProductsList />} />
              <Route path=":productId" element={<ProductDescription />} />
              <Route path="cart" element={<Cart />} />
              <Route path="search" element={<SearchPage />} />
              <Route path="checkout" element={<CheckOut />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Box>
      </Container>
      <Footer />
    </CommerceContext>
  );
};

export default App;
