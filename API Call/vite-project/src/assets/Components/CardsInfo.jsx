import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const CardsInfo = ({ data, baseUrl }) => {
  console.log("ln6", data);
  let results = data.results;

  //   let finalUrl = baseUrl + `${results.backdrop_path}`;
  return (
    <>
      {results.map((item) => {
        return (
          <Card
            style={{
              width: "30rem",
            }}
          >
            <img alt="Sample" src={baseUrl + item.backdrop_path} />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {item.overview}
              </CardSubtitle>
              <CardText>{item.popularity}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default CardsInfo;
