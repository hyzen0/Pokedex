import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [preUrl, setPreUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const intialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() =>{
    async fetchData() {
      let response = await getAllPokemon( initialUrl)
    }
  }, [])
  return <div></div>;
}

export default App;
