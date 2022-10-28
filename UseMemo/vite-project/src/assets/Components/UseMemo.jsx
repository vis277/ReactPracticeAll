import React, { useState, useMemo, useEffect } from "react";

const UseMemo = () => {
  const [num, setNum] = useState(0);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const doubleNumber = useMemo(() => {
    console.log("render");
    return slowfunction(num);
  }, [num]);
  function slowfunction() {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 10;
  }

  useEffect(() => {
    const _handleClick2 = () => {
      setCounter2(counter2 + 1);
    };
  });
  return (
    <>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={_handleClick2}>increment2</button>
      <div>Counter: {counter}</div>
      <div>Counter2:{counter2}</div>
      <div>{doubleNumber}</div>
    </>
  );
};

export default UseMemo;
