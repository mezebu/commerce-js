import React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/HeroPage/Hero";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/Products/ProductsList";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDescription from "./components/Products/ProductDescription";
import Header from "./components/Header/Header";

import { CommerceContext } from "./contexts/CommerceContext";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <CommerceContext>
      <Box sx={{ backgroundColor: "#F6F9FC" }}>
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
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>
          </Box>
        </Container>
        <Footer />
      </Box>
    </CommerceContext>
  );
};

export default App;
