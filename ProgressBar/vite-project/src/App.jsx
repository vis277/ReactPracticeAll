import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProgressBar from "./Components/ProgressBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ProgressBar></ProgressBar>
    </>
  );
}

export default App;
