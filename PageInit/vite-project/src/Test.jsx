import { useEffect, useMemo, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [num, setNum] = useState("");
  const _handleClick = () => {
    setCount(count + 1);
  };
  const doubleNum = useMemo(() => {
    return slowFunc(num);
  }, [num]);

  function slowFunc() {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }
  useEffect(() => {
    alert("counter 2 rendered");
  }, [counter2]);

  return (
    <>
      <p>{count}</p>
      <button onClick={_handleClick}>Click</button>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      ></input>
      <p>{doubleNum}</p>
      <button onClick={() => setCounter2(counter2 + 1)}>increment2</button>
      <div>Counter2:{counter2}</div>
    </>
  );
};
export default Test;
