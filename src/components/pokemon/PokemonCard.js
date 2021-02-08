import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function PokemonCard({ pokemon, number }) {
  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <StyledLink to={`pokemon/${number}`}>
        <Card className="Card">
          <h5 className="card-header">{}</h5>
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            src={pokemon.sprites.front_default}
            style={{ display: "block" }}
          />

          <h6 className="card-title">
            {pokemon.name
              .toLowerCase()
              .split(" ")
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(" ")}
          </h6>
        </Card>
      </StyledLink>
    </div>
  );
}

export default PokemonCard;
