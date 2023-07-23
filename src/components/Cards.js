import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import restaurantList from "../util/restaurantData";


const Cards = () => {
  const [restaurant, setRestaurant] = useState(restaurantList);

  return (
    <Container className="d-flex flex-wrap gap-5 mt-4">
      {restaurant.map((e) => {
        return (
          <Card style={{ width: "18rem" }} key={e.data?.id} className="d-flex .justify-content-around">
            <Card.Img
              variant="top"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                e.data?.cloudinaryImageId
              }
            />
            <Card.Body>
              <Card.Title>{e.data?.name}</Card.Title>
              <Card.Text>{e.data?.cuisines.join(", ")}</Card.Text>
              <Card.Subtitle>{e.data?.area}</Card.Subtitle>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Cards;
