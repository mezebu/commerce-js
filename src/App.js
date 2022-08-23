import React from "react";
import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

// prettier-ignore
import { Hero, ProductsList, ProductDescription, Cart, NoMatch, CheckOut, SearchPage,  } from "./pages";

import Footer from "./components/Footer/Footer";

import { darkMode, lightMode } from "./themes/universalStyles";
import { CommerceContext } from "./contexts/CommerceContext";
import { useThemeContext } from "./contexts/ThemeContext";
import AppBar from "./components/AppBar/AppBar";

const App = () => {
  const darkTheme = useThemeContext();
  const theme = darkTheme ? darkMode : lightMode;

  return (
    <ThemeProvider theme={theme}>
      <CommerceContext>
        <CssBaseline />
        <AppBar />
        <Toolbar />
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
    </ThemeProvider>
  );
};

export default App;
