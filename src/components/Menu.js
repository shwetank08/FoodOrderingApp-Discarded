import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Menu = () => {
  const [restaurant, setRestaurant] = useState([]);

  const { resId } = useParams();

  const fetchData = async (req, res) => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5471702&lng=77.20027449999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await res.json();
      setRestaurant(json.data);
      console.log(json.data.cards[0].card.card.info);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (restaurant.length === 0) {
    return <Shimmer />;
  }

  const { name, cuisines, totalRatingsString, areaName, avgRating,costForTwoMessage } =
    restaurant.cards[0].card.card.info;
    const {deliveryTime} = restaurant.cards[0].card.card.info.sla;

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h2>{name}</h2>
          <h5 className="text-muted">{cuisines.join(", ")}</h5>
          <h5 className="text-muted">{areaName}</h5>
        </Col>
        <Col className="d-flex flex-column align-items-end">
          <div className="d-flex flex-column justify-content-center border border-success rounded p-2">
            <h4 className="d-flex justify-content-center">
              <i class="bi bi-star-fill"></i>
              {`  ${avgRating}`}
            </h4>
            <h4 className="border-top">{totalRatingsString}</h4>
          </div>
        </Col>
      </Row>
      <Row
        className="border-top"
        style={{ height: "4px", width: "100%" }}
      ></Row>
      <Row>
      <h4><i class="bi bi-clock"></i>{` ${deliveryTime} mins`} {` ${costForTwoMessage}`}</h4>
      </Row>
    </Container>
  );
};

export default Menu;
