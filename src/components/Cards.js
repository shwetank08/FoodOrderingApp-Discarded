import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({
  name,
  cuisines,
  avgRating,
  areaName,
  cloudinaryImageId,
  costForTwo,
  sla
}) => {
  return (
    <Card style={{ width: "18rem" }} className="d-flex .justify-content-around">
      <Card.Img
        variant="top"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{avgRating}</Card.Text>
        <Card.Text>{cuisines.join(", ")}</Card.Text>
        <Card.Text>{costForTwo}</Card.Text>
        <Card.Subtitle>{`${sla?.deliveryTime} minutes`}</Card.Subtitle>
        <Card.Subtitle>{areaName}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Cards;
