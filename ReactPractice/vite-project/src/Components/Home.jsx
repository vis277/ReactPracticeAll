import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/contact?q=${query}`);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((result) => {
        console.log(result);
        setData([...result]);
      });
  }, []);
  console.log("ln21", data);
  return (
    <>
      <p>I am from Home</p>
      <Link to={"/about"}>About</Link>
      <br></br>
      <Link to={"/contact"}>Contact</Link>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <button onClick={handleClick}>Go to Contact</button>

      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}</p>
            <p>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
