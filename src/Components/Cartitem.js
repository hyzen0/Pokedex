import React from "react";
import { HashRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap";

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

const CartItem = ({ pokemon, addInCart }) => {
  return (
    <Router>
      <div className="col-md-11 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${pokemon.id}`}>
          <Card className="card">
            <h5 className="card-header">{pokemon.id}</h5>
            <CardImg top src={pokemon.sprites.front_default} />
            <CardBody className="text-center">
              <CardTitle>
                <b>
                  {" "}
                  {pokemon.name
                    .toLowerCase()
                    .split(" ")
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(" ")}
                </b>
              </CardTitle>
              <CardText className="secondary"></CardText>
            </CardBody>
          </Card>
        </StyledLink>
        <Button color="success" onClick={() => addInCart(pokemon)}>
          Add to Favourite
        </Button>
      </div>
    </Router>
  );
};

export default CartItem;
