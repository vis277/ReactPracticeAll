import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  const _handleChildClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={() => setCount(count + 1)}>ClickMe</button>
      <p>{count}</p>
      <Child
        handleclick={_handleChildClick}
        counter={count}
        setcount={(param) => setCount(param)}
      ></Child>
    </>
  );
};

export default Parent;
