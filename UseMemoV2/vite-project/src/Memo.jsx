import { useMemo, useState } from "react";

const Memo = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const counter = useMemo(() => {
    let counter1 = 0;
    console.log("render");
    for (let i = 0; i < 10; i++) {
      counter1 += i;
    }
    return counter1;
  }, [value2]);

  return (
    <>
      <input
        type={"text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <input
        type={"text"}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      ></input>
    </>
  );
};

export default Memo;
