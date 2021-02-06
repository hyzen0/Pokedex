import React, { useState, useEffect } from "react";
import { getAllPokemon } from "./services/pokemon";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);
  const loadingPokemon = async data => {
    let _pokemon = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);
      })
    );
  };
  return <div>{loading ? <h1>Loading...</h1> : <h1>Data is fetched</h1>}</div>;
}

export default App;
