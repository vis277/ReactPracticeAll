import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Calculator from "./Components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Calculator></Calculator>
    </>
  );
}

export default App;
