import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Select from "./assets/Components/Select";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Select></Select>
    </>
  );
}

export default App;
