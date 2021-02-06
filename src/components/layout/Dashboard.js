import React, { Component } from "react";
import PokemonList from "../pokemon/PokemonLIst";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <PokemonList />
      </div>
    );
  }
}
