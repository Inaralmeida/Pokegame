import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import { GlobalProvider } from "./Context/GlobalState";
const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Rotas;
