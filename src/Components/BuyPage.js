import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./Cartitem";
import { getPokemon, getAllPokemon } from "./pokemon";
import Cart from "./Cart";

import { random, commerce } from "faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "INSERT_YOUR_KEY_HERE";

const url = "https://pokeapi.co/api/v2/pokemon";

const localurl =
  "https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json";

const BuyPage = ({ addInCart }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [cartItem, setCartItem] = useState([]);

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
  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id != item.id));
  };

  return (
    <Container fluid>
      <div className="btn">
        <button type="button" class="btn btn-danger" onClick={prev}>
          Prev
        </button>
        <button type="button" class="btn btn-warning" onClick={next}>
          Next
        </button>
      </div>
      <h1 className="text-dark text-center">Pokedex</h1>
      <Row>
        {pokemonData.map((pokemon, i) => (
          <Col md={4} key={pokemon.id}>
            <CartItem pokemon={pokemon} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
      <div className="btn">
        <button type="button" class="btn btn-danger" onClick={prev}>
          Prev
        </button>
        <button type="button" class="btn btn-warning" onClick={next}>
          Next
        </button>
      </div>
    </Container>
  );
};

export default BuyPage;
