import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Api from "./assets/Components/ApiCall";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Api url="https://api.themoviedb.org/3/tv/airing_today?api_key=24661393e867b3b4a85f3f759a76a9d5"></Api>
      <Api url="https://api.themoviedb.org/3/movie/popular?api_key=24661393e867b3b4a85f3f759a76a9d5"></Api>
    </>
  );
}

export default App;
