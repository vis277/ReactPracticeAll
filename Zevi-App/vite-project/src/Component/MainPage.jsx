import { useEffect, useState } from "react";
import { getData } from "../Services/Network";
import { CgHeart } from "react-icons/cg";
import { BsHeartFill, BsHeart } from "react-icons/bs";

import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { useParams, useSearchParams } from "react-router-dom";
const MainPage = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [wishlistColor, setWishListColor] = useState("");

  const [searchParam, setSearchParam] = useSearchParams();
  //   const searchValue = searchParam.get("q");
  //   console.log(searchValue);
  const { id } = useParams();
  console.log(id);
  const url = "https://fakestoreapi.com/products";
  useEffect(() => {
    async function getMydata() {
      const result = await getData(url);
      console.log(result);

      setList(result);
      setFilteredList(result);
      console.log("ln12", result);
    }
    getMydata();
  }, []);
  const _handleChange = (e) => {
    setSearch(e.target.value);

    const filteredListDisplay = list.filter((item) => {
      if (item.title.toLowerCase().includes(e.target.value)) {
        return item;
      }
    });
    console.log("ln41", filteredList);
    setFilteredList(filteredListDisplay);
  };

  // const _handleWishList = (id) => {
  //   // const findIndex = list.findIndex((item) => {
  //   //   return item.id === id;
  //   // });
  //   // console.log("ln53", findIndex);

  // };

  const _handleClickFill = () => {
    return <BsHeartFill></BsHeartFill>;
  };

  return (
    <>
      <input type="text" value={search} onChange={_handleChange}></input>{" "}
      <button>Search</button>
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {filteredList.map((item) => {
          return (
            <Card
              key={item.id}
              style={{
                width: "18rem",
                position: "relative",
              }}
            >
              <img alt="Sample" src={item.image} height={100} />

              <BsHeart
                style={{
                  position: "absolute",
                }}
                onClick={_handleClickFill}
              />

              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {item.price}$
                </CardSubtitle>
                <CardText style={{ textOverFlow: "ellipsis" }}>
                  Rating :{item.rating.rate}
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};
export default MainPage;
