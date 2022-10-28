import { useState } from "react";

const Debounce = () => {
  const debounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handleChange = debounce((e) => {
    console.log(e.target.value);
  }, 3000);
  return (
    <>
      <input type={"text"} onChange={handleChange}></input>
    </>
  );
};

export default Debounce;
