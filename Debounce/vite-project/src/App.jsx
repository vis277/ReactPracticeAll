import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const debounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };
  const _handleChange = debounce((e) => {
    console.log(e.target.value);
  }, 3000);

  return (
    <>
      <input onChange={_handleChange}></input>
    </>
  );
}

export default App;
