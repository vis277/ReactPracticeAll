import { useEffect } from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  const _handleclick = (e) => {
    console.log(e.target.innerText);
    setPage(+e.target.innerText);
    console.log(e);
  };

  const _handleclickNext = () => {
    if (page === 9) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  const _handleclickPrevious = () => {
    if (page === 1) {
      setPage(9);
    } else {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=24661393e867b3b4a85f3f759a76a9d5" +
        `&page=${page}`
    )
      .then((data) => data.json())
      .then((data) => {
        setData(data.results);
        setTotalPage(data.total_pages);
        console.log(data);
      });
  }, [page]);

  const renderPageinit = () => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <button
          style={{ border: page === i ? "1px solid black" : "none" }}
          key={i}
          className="btn"
          onClick={_handleclick}
        >
          {i}
        </button>
      );
    }
    return pages;
  };
  return (
    <>
      <div className="button">
        <button onClick={_handleclickPrevious}>previous</button>
        {renderPageinit()}
        <button className="btn" onClick={_handleclickNext}>
          next
        </button>
      </div>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="parent" key={item.id}>
              <div className="image">
                <img src={baseUrl + item.backdrop_path} alt="Loading" />
              </div>
              <div className="name">
                <span>{item.name}</span>
              </div>
              <div className="popularity">
                <span>{item.popularity}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
