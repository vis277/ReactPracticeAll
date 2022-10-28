import { useState } from "react";
import Child from "./Child";

const Test2 = () => {
  const [message, setMessage] = useState("hello");
  return (
    <>
      {message}
      <Child data={setMessage}></Child>
    </>
  );
};
export default Test2;
