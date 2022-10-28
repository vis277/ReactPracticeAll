import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseMemoV4 = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=24661393e867b3b4a85f3f759a76a9d5"
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setUser(data.results);
      });
  }, []);

  const filteredResult = user.filter((item) => {
    console.log("insideV4");
    if (
      item.name
        .toLowerCase()
        .match(search.toLowerCase() || search.toUpperCase())
    ) {
      return item.name;
    }
  });

  return (
    <>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {filteredResult.map((item) => {
        return <p key={item.id}>{item.name}</p>;
      })}
    </>
  );
};

export default UseMemoV4;
