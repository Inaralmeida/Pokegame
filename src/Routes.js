import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "styled-components";
import Theme from "./Styles/Theme";
import { GlobalProvider } from "./Context/GlobalState";
import SelectPokemon from "./Pages/SelectPokemon/SelectPokemon";
const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/select-pokemon" component={SelectPokemon} />
          </Switch>
        </ThemeProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default Rotas;
