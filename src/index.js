import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/Container";
import Pokemons from "./containers/Pokemons";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Pokemons />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
