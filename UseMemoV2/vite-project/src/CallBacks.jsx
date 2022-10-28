import { useCallback, useState } from "react";
import Memo from "./Memo";

const CallBacks = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  //   const counter = useCallback(() => {
  //     let counter1 = 0;
  //     console.log("render");
  //     for (let i = 0; i < 10; i++) {
  //       counter1 += i;
  //     }
  //     return counter1;
  //   }, [value2]);

  //   const counter = () => {
  //     let counter1 = 0;
  //     console.log("render");
  //     for (let i = 0; i < 10; i++) {
  //       counter1 += i;
  //     }
  //     return counter1;
  //   };

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
      <Memo data={counter}></Memo>
    </>
  );
};

export default CallBacks;
