import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  opacity: 1;
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
        <Card className="card">
          <h5 className="card-header">{number}</h5>
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            src={pokemon.sprites.front_default}
            style={{ display: "block" }}
          />
          <div className="card-body mx-auto">
            <h4 className="card-title">
              <b>
                {" "}
                {pokemon.name
                  .toLowerCase()
                  .split(" ")
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(" ")}
              </b>
            </h4>
            <div className="Card__info">
              <div className="Card__data Card__data--weight">
                <p className="title">
                  <b>Weight:</b> {pokemon.weight}
                </p>
              </div>
              <div className="Card__data Card__data--weight">
                <p className="title">
                  <b>Height:</b> {pokemon.height}
                </p>
              </div>
              <div className="Card__data Card__data--ability">
                <p className="title">
                  <b>Ability:</b> {pokemon.abilities[0].ability.name}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </StyledLink>
    </div>
  );
}

export default PokemonCard;
