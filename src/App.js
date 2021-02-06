import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [preUrl, setPreUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const intialUrl = "https://pokeapi.co/api/v2/pokemon";

  return <div></div>;
}

export default App;
