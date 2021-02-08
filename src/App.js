import React, { Component, useState, useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import backgroundImage from "./pattern.png";

import NavBar from "./components/layout/NavBar";
import Dashboard from "./components/layout/Dashboard";
import SearchBar from "./components/search/SearchBar";
import Pokemon from "./components/pokemon/Pokemon";
import Pagination from "./components/Pagination";
import { getPokemon, getAllPokemon } from "./components/search/pokemon";
import Card from "./components/pokemon/PokemonCard";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  };

  const loadPokemon = async data => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon);

        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <NavBar />
        <Switch>
          <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />

          <div>
            {loading ? (
              <h1 style={{ textAlign: "center" }}>Loading...</h1>
            ) : (
              <>
                <div className="btn">
                  <button type="button" class="btn btn-danger" onClick={prev}>
                    Prev
                  </button>
                  <button type="button" class="btn btn-warning" onClick={next}>
                    Next
                  </button>
                </div>
                <div className="row">
                  {pokemonData.map((pokemon, i) => {
                    return <Card key={i} pokemon={pokemon} number={i + 1} />;
                  })}
                </div>
                <div className="btn">
                  <button type="button" class="btn btn-danger" onClick={prev}>
                    Prev
                  </button>
                  <button type="button" class="btn btn-warning" onClick={next}>
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
