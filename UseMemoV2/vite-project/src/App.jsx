import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [userName, setUserName] = useState("");

  // Re-Calculated everytime on re-render
  // let counter = 0;
  // for (let item = 0; item < 100; item++) {
  //   console.log("render");
  //   counter = counter + item;
  // }
  const counter = useMemo(() => {
    let counter1 = 0;
    for (let item = 0; item < 100; item++) {
      console.log("render");
      counter1 = counter1 + item;
    }
    return counter1;
  }, []);
  return (
    <>
      <div>
        <p>Counter: {counter}</p>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
