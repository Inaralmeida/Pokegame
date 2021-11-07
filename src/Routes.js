import React from "react";
import {
  BrowserRouter,
  Routes ,
  Route,
} from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "styled-components";
import Theme from './Styles/Theme'
const Rotas = () => {


  return (
       <BrowserRouter>
       <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
   
  );
};

export default Rotas;
