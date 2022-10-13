import React from "react";
import { Box, Container, CssBaseline, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

import { ProductsList, NoMatch, CheckOut } from "./pages";

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
                <Route index element={<ProductsList />} />
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
