import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {currentURL} from "../util/restaurantData";
import "../index.css"

const Cards = () => {
  const [restaurant, setRestaurant] = useState([]);

  const fetchData = async() => {
    const res = await fetch(currentURL);
    const json = await res.json();
    console.log(json);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  useEffect(()=>{
    fetchData();
  },[])

  if(restaurant.length === 0){
    return(
      <Container>
      <div className="d-flex flex-wrap gap-5 mt-4 .justify-content-around">
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
        <div className="shimmer d-flex .justify-content-around" style={{ width: "18rem", backgroundColor: "#ccc", height: "25rem"}}></div>
      </div>
      </Container>
    )
  }

  return (
    <Container className="d-flex flex-wrap gap-5 mt-4">
      {restaurant.map((e) => {
        return (
          <Card style={{ width: "18rem" }} key={e.info?.id} className="d-flex .justify-content-around">
            <Card.Img
              variant="top"
              src={
                "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                e.info?.cloudinaryImageId
              }
            />
            <Card.Body>
              <Card.Title>{e.info?.name}</Card.Title>
              <Card.Text>{e.info?.cuisines.join(", ")}</Card.Text>
              <Card.Text>{e.info?.avgRating}</Card.Text>
              <Card.Subtitle>{e.info?.areaName}</Card.Subtitle>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Cards;
