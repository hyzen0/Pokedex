import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach(item => {
    amount = item.id;
  });

  return (
    <Container fluid>
      <h1 className="text-dark">Favourite Pokemons</h1>
      <ListGroup>
        {cartItem.map(item => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.sprites.front_default} />
              </Col>
              <Col className="text-center">
                {" "}
                <div className="text-primary">
                  <b>{item.name}</b>
                </div>
                <div className="Card__info">
                  <div className="Card__data Card__data--weight">
                    <p className="title">
                      <b>Weight:</b> {item.weight}
                    </p>
                  </div>
                  <div className="Card__data Card__data--weight">
                    <p className="title">
                      <b>Height:</b> {item.height}
                    </p>
                  </div>
                  <div className="Card__data Card__data--ability">
                    <p className="title">
                      <b>Ability:</b> {item.abilities[0].ability.name}
                    </p>
                  </div>
                  <Button color="danger" onClick={() => removeItem(item)}>
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Cart;
