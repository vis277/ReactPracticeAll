import { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { getData } from "../Services/Network";
import MainPage from "./MainPage";
const Home = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const url = "https://fakestoreapi.com/products?limit=5";

  useEffect(() => {
    async function getMydata() {
      const result = await getData(url);
      console.log(result);

      setList(result);

      console.log("ln12", result);
    }
    getMydata();
  }, []);

  const _handleChange = (e) => {
    setSearch(e.target.value);
  };

  const _handleClick = () => {
    setDisplay((display) => !display);
  };

  const _handleButtonClick = () => {
    navigate(`/search?q=${search}`);
  };
  return (
    <>
      <input
        type="search"
        value={search}
        onChange={_handleChange}
        onClick={_handleClick}
      ></input>

      <button onClick={_handleButtonClick}>Search</button>

      {list.map((item) => {
        return (
          <div key={item.id} style={{ display: display ? "block" : "none" }}>
            <div>{item.title}</div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
